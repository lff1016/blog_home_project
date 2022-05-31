import React from 'react';
import { useSelector } from 'react-redux'

import './index.css';
import memoryUtils from '../../../utils/memoryUtils';

export default function Aside() {
  const user = memoryUtils.user

  return (
    <div id="aside" className="aside">
    <div className="card card-info">
        <div className="is-center">
            <div className="avatar-img"><img src={`http://localhost:3001/upload/avatar/${user.avatar[0]}`}/></div>
            <div className="author-info_name">{user.username}</div>
            <div className="author-info_description">{user.bio}</div>
        </div>
        <div className="card-info_data">
            <div className="card-info_data-item is-center">
                <div className="headline">文章</div>
                <div className="headline-number">7</div>
            </div>
            <div className="card-info_data-item is-center">
                <div className="headline">分类</div>
                <div className="headline-number">9</div>
            </div>
        </div>
    </div>
    <div className="card card-announcement">
        <div className="item-headline">
            <span className="iconfont icon-laba">公告🔈</span>
        </div>
        <div className="announcement_content">我的博客诞生了！</div>
    </div>

</div>
  )
}
