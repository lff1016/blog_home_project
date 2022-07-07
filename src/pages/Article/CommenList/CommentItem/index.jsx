import React from 'react';
import { Avatar, Comment, Tooltip } from 'antd';
import { useBoolean } from 'ahooks';
import moment from 'moment';

import CommentForm from '../../CommentForm';
import './index.css'

// { _id, avatar, username, content, date, isReplay, replyId, to }
export default function CommentItem(props) {
  const {avatar, username, content, date, aid, isReplay, replayId, data, isShow } = props
  const [showReply, { toggle: toggleReply, setFalse: closeReply }] = useBoolean(false)

  // 筛选评论下的回复
  const childReplayList = (data.filter(replay => replay.replayId == replayId)) || []

  return (
    <div className={isReplay ? 'comment-reply' : 'comment'}>
      {/* 评论详情展示 */}
      <Comment
        actions={[<span key="comment-basic-reply-to" onClick={toggleReply}>回复</span>]}
        author={<a>{username}</a>}
        avatar={<Avatar src={avatar[0]} alt={username} />}
        content={
          <p>
            {content}
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />

      {/* 回复表单框 */}
      <div className={showReply ? 'comment-form' : 'comment-form-hidden'}>
        <CommentForm
          changeRelayShow={closeReply}
          isReplay={isReplay}
          replayId={replayId}
          aid={aid}
        />
      </div>

      {/* 子评论 */}
      {
        isShow &&  childReplayList.length !== 0 ? // 主评论是否展示，不展示就不渲染子评论
          (childReplayList.map(replay => (
            replay.isShow ? (
              <CommentItem
                key={replay._id}
                avatar={replay.uid.avatar} // 用作页面展示
                username={replay.uid.username} // 用作页面展示
                content={replay.content} // 用作页面展示
                date={replay.publishDate} // 用作页面展示
                isReplay={true} // 传给评论表单---是否是回复
                aid={aid} // 传给评论表单--文章的 id
                replayId={replay._id}
                data={data}
                isShow={replay.isShow} // 传给评论表单--主评论的状态
              // to={comment.uid._id} // 传给评论表单--回复哪个用户的 id
              />
            ) : ''
          )
          )
          ) : ''
      }
    </div>
  )
}
