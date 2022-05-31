// 文章内容页面
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';


import MyIcon from '../../components/IconFont';
import Markdown from '../../components/Markdown';
import CommentForm from './CommentForm';

import './index.css'
import CommenList from './CommenList';

export default function Article() {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const [msg, setMsg] = useSearchParams()
  // 获取当前点击文章的 id
  const id = msg.get('id')
  // 从 redux 中找到对应的文章
  const articles = useSelector((state) => state.articles)

  const articleInfo = articles.articles.find(item => item._id === id)
  console.log(articleInfo);

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
              <div className="article-comment">
                <h3>评论</h3>
                <CommentForm/>
                <div className="comment-list">
                  <CommenList/>
                </div>
              </div>

            </div>
          </main>
        </div>
        <div className='article-slide'>
          我是侧边栏
        </div>
      </div>
    </div>
  )
}
