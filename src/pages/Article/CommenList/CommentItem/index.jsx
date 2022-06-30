import React from 'react';
import { Avatar, Comment, Tooltip } from 'antd';
import { useBoolean } from 'ahooks';
import moment from 'moment';

import CommentForm from '../../CommentForm';
import './index.css'

// { _id, avatar, username, content, date, isReplay, replyId, to }
export default function CommentItem(props) {

  const [showReply, { toggle: toggleReply, setFalse: closeReply }] = useBoolean(false)
  // console.log('@@',replyId, isReplay);

  return (
    <div className={props.isReplay ? 'comment-reply' : 'comment'}>
      <Comment 
        actions={[<span key="comment-basic-reply-to" onClick={toggleReply}>回复</span>]}
        author={<a>{props.username}</a>}
        avatar={<Avatar src={props.avatar[0]} alt={props.username} />}
        content={
          <p>
            {props.content}
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
      <div className={showReply ? 'comment-form' : 'comment-form-hidden'}>
        <CommentForm
          isReplay={props.isReplay}
          replayId={props.replayId}
          aid={props.aid}
          to={props.to}
        />
      </div>
    </div>
  )
}
