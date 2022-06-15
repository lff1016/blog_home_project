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
      data.filter(comment => comment.replyId == "0").map(item => {
          return (
            <div key={item._id}>
              <div className='divider'></div>
              <CommentItem
                _id={item._id}
                avatar={item.uid.avatar}
                username={item.uid.username}
                content={item.content}
                date={item.publishDate}
                aid={aid}
                isReply={false}
                replyId={item._id}
              />
              {data.filter(reply => reply.replyId === item._id).map(child => {
                return (
                  <CommentItem
                    key={child._id}
                    _id={child._id}
                    avatar={child.uid.avatar}
                    username={child.uid.username}
                    content={child.content}
                    date={child.publishDate}
                    aid={aid}
                    isReply={true}
                    replyId={item._id}
                  />
                )
              })}
            </div>
          )
        })
    )}
    </>
  );
};