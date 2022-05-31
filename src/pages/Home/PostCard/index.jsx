import React from 'react';
import moment from 'moment';
import { Typography } from 'antd';
import {
  FieldTimeOutlined,
  InboxOutlined
} from '@ant-design/icons';

import './index.css'

const { Paragraph } = Typography;

export default function PostCard(props) {

  const [ellipsis, setEllipsis] = React.useState(true)

  console.log('props', props);

  const { id, title, date, category, content, imgUrl, onClick } = props

  return (
    <div className="content-item" key={id} onClick={onClick}>
      {/* 文章图片封面 */}
      <div className="cover left_radius">
        <a href="#"></a>
        <img className="post_img_bg" src={'http://localhost:3001/upload/coverImg/' + imgUrl} />
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
        </div>
        {/* 文章主体 */}
        <div className="article">
          <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
            {content.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
