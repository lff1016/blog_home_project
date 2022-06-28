import React from 'react';

import './index.css';
import { myInfo } from '../../utils/constant';

import Echart from '../../components/Echart';

export default function About() {
  return (
    <div className='about'>
      <div className='about-wrap'>
        <div className='about-header'>
          关于我
        </div>
        <div className='about-main'>
          <div className='about-left'>
            {/* 文章分布 */}
            <div className='categories-count'>
              <div className='categories-bar-title'>📋文章分布</div>
              <div className='categories-bar'>
                <Echart />
              </div>
            </div>
            {/* 关于本站 */}
            <div className='about-site'>
              <div className='about-site-title'>📚关于本站</div>
              <div className='about-site-content'>
                <p>本站是我学习React后的练习项目，主要是为了有一个自己分享些东西的地方以及使自己熟练使用React。关于整个博客项目，主要有博客前台、博客后台和博客后端~</p>
                <p>目前博客是我的最初版本，肯定有许多的bug存在，希望大家能够指出交流！</p>
                <p style={{ fontWeight: 700 }}>🌈博客前台主要用到的技术和库：</p>
                <p>🌑 博客基于React + Node + Mongoadb 前后端分离搭建😁；</p>
                <p>🌒 使用React相关库：react-router，react-redux等；</p>
                <p>🌓 使用Antd组件库；</p>
                <p>🌔 axios进行网络请求；</p>
                <p>🌗 时间格式化工具：moment；</p>
                <p>🌙 markdown文本展示：marked， 以及代码高亮工具：highlight.js</p>
              </div>
            </div>
          </div>
          <div className='about-right'>
            <div className='myInfo'>
              <img className='myInfo-avatar' src={myInfo.myAvatar} alt="" />
              <div className='myInfo-detail'>
                <div className='myInfo-username'>网名：刹那芳华</div>
                <div className='myInfo-work'>职业：web前端开发工程师</div>
                <div className='myInfo-email'>邮箱：{myInfo.myEmail}</div>
                <div className='myInfo-qq'>QQ： {myInfo.myQQ}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
