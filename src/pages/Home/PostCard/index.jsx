import React from 'react';
import moment from 'moment';
import { Typography, Tag } from 'antd';
import {
  FieldTimeOutlined,
  InboxOutlined,
  TagOutlined
} from '@ant-design/icons';

import './index.css'

const { Paragraph } = Typography;

export default function PostCard(props) {

  const [ellipsis, setEllipsis] = React.useState(true)

  // 定义标签的背景色
  const tagColor = ['red', 'geekblue', 'green', , 'orange', 'cyan', 'volcano', 'purple']

  const { id, title, date, category, tags, content, imgUrl, onClick } = props

  return (
    <div className="content-item" key={id} onClick={onClick}>
      {/* 文章图片封面 */}
      <div className="cover left_radius">
        <a href="#"></a>
        <img className="post_img_bg" src={imgUrl ? 'http://localhost:3001/upload/coverImg/' + imgUrl : 'http://localhost:3001/upload/coverImg/train.png'} />
      </div>
      {/* 文章简介 */}
      <div className="content-info">
        <div className="article-title">
          <a className='article-title-link' href="#">{title}</a>
        </div>
        <div className="article-meta">
          <div className="publishDate">
            <FieldTimeOutlined style={{ marginRight: '5px', color: '#1873a2' }} />
            <span>{moment(date).format('YYYY-MM-DD')}</span>
          </div>
          <div className="category">
            <InboxOutlined style={{ marginRight: '5px', color: '#1873a2' }} />
            <span>{category.name}</span>
          </div>
          <div className="tags">
            <TagOutlined style={{ marginRight: '6px', color: '#1873a2' }} />
            {
              tags.map((tag, index) => {
                return (
                  <Tag color={tagColor[index]} key={tag._id}>{tag.name}</Tag>
                )
              })
            }
          </div>
        </div>
        {/* 文章主体 */}
        <div className="article">
          <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: '更多' } : false}>
            {content.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
