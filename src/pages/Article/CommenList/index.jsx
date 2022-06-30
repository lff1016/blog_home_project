// 评论列表

import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'

import CommentItem from './CommentItem';
import './index.css';

export default function CommentList({ data, loading, aid }) {
  
  return (
    <>
    {loading ? (
      <>loading</>
    ): (
      data.map(comment => {
        return (
          <div key={comment._id}>
            <div className='divider'></div>
            <CommentItem
              _id={comment._id}
              avatar={comment.uid.avatar}
              username={comment.uid.username}
              content={comment.content}
              date={comment.publishDate}
              aid={aid}
              isReplay={false} // 是否是评论
              replayId={comment._id}
              to={comment.uid._id} // 传给评论表单--回复哪个用户的 id
            />
            {
              comment.replays.length === 0 ? '' : (
                comment.replays.map(replay => {
                  return (
                    <CommentItem
                    key={replay._id}
                    avatar={replay.from.avatar} // 用作页面展示
                    username={replay.from.username} // 用作页面展示
                    content={replay.content} // 用作页面展示
                    date={replay.publishDate} // 用作页面展示
                    isReplay={true} // 传给评论表单
                    aid={aid} // 传给评论表单--文章的 id
                    replayId={comment._id} // 传给评论表单--回复评论的 id
                    to={comment.uid._id} // 传给评论表单--回复哪个用户的 id
                  />
                  )
                })
              )
            }
          </div>
        )
      })
      // data.filter(comment => comment.replyId == "0").map(item => {
      //     return (
      //       <div key={item._id}>
      //         <div className='divider'></div>
      //         <CommentItem
      //           _id={item._id} // 评论 id
      //           avatar={item.uid.avatar} // 
      //           username={item.uid.username}
      //           content={item.content}
      //           date={item.publishDate}
      //           aid={aid}
      //           isReply={false}
      //           replyId={item._id} 
      //         />
      //         {data.filter(reply => reply.replyId === item._id).map(child => {
      //           return (
      //             <CommentItem
      //               key={child._id}
      //               _id={child._id}
      //               avatar={child.uid.avatar}
      //               username={child.uid.username}
      //               content={child.content}
      //               date={child.publishDate}
      //               aid={aid}
      //               isReply={true}
      //               replyId={item._id}
      //             />
      //           )
      //         })}
      //       </div>
      //     )
      //   })
    )}
    </>
  );
};