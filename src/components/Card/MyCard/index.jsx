import React from 'react';
import { useSelector } from 'react-redux';

import { myInfo } from '../../../utils/constant';

import './index.css';

export default function MyCard() {

    // 从 redux 中找到对应的文章和分类
    const articles = useSelector((state) => state.articles).articles
    const categories = useSelector(state => state.categories).categories

    return (
        <div className="card card-info">
            <div className="is-center">
                <div className="avatar-img"><img src={myInfo.myAvatar} /></div>
                <div className="author-info_name">{myInfo.username}</div>
                <div className="author-info_description">{myInfo.bio}</div>
            </div>
            <div className="card-info_data">
                <div className="card-info_data-item is-center">
                    <div className="headline">文章</div>
                    <div className="headline-number">{articles.length}</div>
                </div>
                <div className="card-info_data-item is-center">
                    <div className="headline">分类</div>
                    <div className="headline-number">{categories.length}</div>
                </div>
            </div>
        </div>
    )
}
