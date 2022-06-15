import React from 'react';

import { myInfo } from '../../../utils/constant';

import './index.css';

export default function MyCard() {
  return (
    <div className="card card-info">
        <div className="is-center">
            <div className="avatar-img"><img src={myInfo.myAvatar}/></div>
            <div className="author-info_name">{myInfo.username}</div>
            <div className="author-info_description">{myInfo.bio}</div>
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
  )
}
