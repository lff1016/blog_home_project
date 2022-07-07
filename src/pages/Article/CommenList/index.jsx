// 评论列表

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import CommentItem from './CommentItem';
import './index.css';

export default function CommentList({ data, loading, aid }) {

  return (
    <>
      {loading ? (
        <>loading</>
      ) : (
        data.filter(comment => comment.replayId == '0') // 筛选出评论的数据
          .map(comment => {
            return (
              <div key={comment._id}>
                <div className='divider'></div>
                <CommentItem
                  avatar={comment.uid.avatar} // 用于评论详细信息的展示
                  username={comment.uid.username} // 用于评论详细信息的展示
                  content={comment.content} // 用于评论详细信息的展示
                  date={comment.publishDate} // 用于评论详细信息的展示
                  aid={aid} // 文章 id ，用于添加评论/回复时携带文章的信息
                  isReplay={false} // 是否是回复，用于渲染样式的修改
                  replayId={comment._id} // 主评论 id ，用于子评论筛选的条件
                  data={data} // 数据源，用于给子评论筛选其父评论是哪个
                  isShow={comment.isShow} // 主评论是否显示，如果不显示则子评论也不显示
                />
              </div>
            )
          })
      )}
    </>
  );
};