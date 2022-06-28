import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import moment from 'moment';

import MyIcon from '../../IconFont';
import './index.css'

export default function NewArticle() {

  // 从 redux 中获取文章
  const articles = useSelector(state => state.articles).articles.slice(0, 5)
  return (
    <div className='card new-recommend'>
      <div className='nr-header'>
        <MyIcon type='icon-fenlei' />
        <span className='nr-header-title'>最新推荐</span>
      </div>
      <div className='nr-list'>
        {
          articles.map(article => {
            return (
              <div className='nr-list-item' key={article._id}>
                <div className='nr-list-item-header'>{article.title}</div>
                <div className='nr-list-item-content'>
                  <div className='nr-list-item-img'>
                    <img src={article.coverImg.length ? 'http://localhost:3001/upload/coverImg/' + article.coverImg[0] : 'http://localhost:3001/upload/coverImg/train.png'} alt="" />
                  </div>
                  <div className='nr-list-item-info'>
                    <div className='nr-list-item-info-desc'>
                      {article.content}
                    </div>
                    <div className='nr-list-item-info-time'>
                      <span className="nr-list-item-publishDate">
                        <MyIcon type='icon-rili' />
                        {moment(article.publishDate).format('YYYY-MM-DD')}
                      </span>
                      <span className="category">
                        <MyIcon type='icon-fenlei' />
                        {article.category.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
