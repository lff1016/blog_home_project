// 文章内容页面
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import { Tag } from 'antd';

import MyIcon from '../../components/IconFont';
import Markdown from '../../components/Markdown';
import CommentForm from './CommentForm';
import CommenList from './CommenList';

import './index.css';
import { reqCommentList } from '../../api/index';
import { getComments } from '../../redux/features/commentSlice'
import { message } from 'antd';
import Aside from '../../components/Layout/Aside';

export default function Article() {

  // 获取当前点击文章的 id
  const [msg, setMsg] = useSearchParams()
  const id = msg.get('id')
  const [loading, setLoading] = useState(true)

  // 定义标签的背景色
  const tagColor = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#3b5999']


  const dispatch = useDispatch()

  const getAllComments = async (aid) => {
    const res = await reqCommentList(aid)
    if (res.status === 0) {
      dispatch(getComments(res.data))
      setLoading(false)
    } else {
      message.error('获取评论失败😔！')
    }
  }

  // 组件挂载时获取评论数据
  useEffect(() => {
    getAllComments(id)
  }, [loading])

  // 从 redux 中获取该文章的评论
  const { comments } = useSelector(state => state.comments)


  // 从 redux 中找到对应的文章
  const articles = useSelector((state) => state.articles)

  const articleInfo = articles.articles.find(item => item._id === id)

  return (
    <div className='article-wrap'>
      <div className='article'>
        <div className='article-detail'>
          <div className='article-header'>
            {/* 文章的具体信息 */}
            <h1 className="article-title">{articleInfo.title}</h1>
            <div className="article-meta">
              <span className="publishDate">
                <MyIcon type='icon-rili' />
                {moment(articleInfo.publishDate).format('YYYY-MM-DD')}
              </span>
              <span className="category">
                <MyIcon type='icon-fenlei' />
                {articleInfo.category.name}
              </span>
              <span className='author'>
                <MyIcon type='icon-35' />
                李帆
              </span>
            </div>
          </div>
          {/* 文章的内容区域 */}
          <main className="article-content">
            <div className="content-detail">
              <Markdown className='markdown' content={articleInfo.content} />
              <div className='article-tags'>
                标签：
                {
                  articleInfo.tags.map((tag, index) => {
                    return (
                      <Tag className='tag-item' color={tagColor[index]} key={tag._id}>{tag.name}</Tag>
                    )
                  })
                }
              </div>
              {/* 评论区 */}
              <div className="article-comment">
                <h3>评论</h3>
                <CommentForm
                  aid={id}
                  replyId={0}
                />
                <div className="comment-list">
                  <CommenList
                    loading={loading}
                    data={comments}
                    aid={id}
                  />
                </div>
              </div>
              
            </div>
          </main>
        </div>
        <div className='article-slide'>
          <Aside />
        </div>
      </div>
    </div>
  )
}
