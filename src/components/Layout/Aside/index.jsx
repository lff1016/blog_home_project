import React from 'react';

import './index.css';
import MyCard from '../../Card/MyCard';
import NewArticle from '../../Card/NewArticle';

export default function Aside() {
  return (
    <div id="aside" className="aside">
      <MyCard/>
      <NewArticle/>
    {/* <div className="card card-announcement">
        <div className="item-headline">
            <span className="iconfont icon-laba">公告🔈</span>
        </div>
        <div className="announcement_content">我的博客诞生了！</div>
    </div> */}

</div>
  )
}
