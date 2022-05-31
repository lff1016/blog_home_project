import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  FileTextOutlined,
  MessageOutlined,
  CommentOutlined,
  LoginOutlined,
  DownOutlined
} from '@ant-design/icons';
import memoryUtils from '../../../utils/memoryUtils';

import './index.css';

export default function Header() {
  const user = memoryUtils.user
  const location = useLocation()

  // 导航菜单项
  const navItem = [
    {
      key: 'home',
      title: '首页',
      path: '/home',
      icon: <HomeOutlined />
    },
    {
      key: 'articles',
      title: '文章',
      path: '/articles',
      icon: <FileTextOutlined />,
      child: [
        {
          key: 'category',
          title: '🗂分类',
          path: '/category'
        },
        {
          key: 'tags',
          title: '🏷标签',
          path: '/tags'
        }
      ]
    },
    {
      key: 'says',
      title: '说说',
      path: '/says',
      icon: <MessageOutlined />
    },
    {
      key: 'messages',
      title: '留言',
      path: '/messages',
      icon: <CommentOutlined />
    },
    {
      key: 'login',
      title: '登录',
      path: '/login',
      icon: <LoginOutlined />
    },
  ]

  const renderNavItem = (
    <div className='menus'>
      {
        navItem.map(item => {
          return (
            <div className="menus-item" key={item.key}>
              <Link to={item.path} className="site-page">
                {item.icon}
                <span className='nav-item-title' style={{ marginLeft: '8px' }}>{item.title}</span>
                {
                  item.child ?
                    (
                      <ul className="menus-item-child">
                        {
                          item.child.map(subItem => {
                            return (
                              <li key={subItem.key}>
                                <Link className="site-page-child" to={subItem.path}>{subItem.title}</Link>
                              </li>
                            )
                          })
                        }

                      </ul>
                    ) : ('')
                }
              </Link>
            </div>
          )
        })
      }
    </div>
  )

  return (
    <div id='header'>
      <div className={location.pathname === '/home' ? 'nav nav-home-color' : 'nav nav-color'}>
        <div id="blog_name">
          <i className="iconfont icon-icon-test"></i>
          <a href="/home/">{user.username}，今天也要加油鸭！</a>
        </div>
        {renderNavItem}
      </div>
      {/* 首页大图 */}
      {
        location.pathname === '/home' ? (
          <div className='post-bg full-page'>
            {/* 底部箭头 */}
            <div id="scroll-down">
              <DownOutlined className='scroll-down-effects' />
            </div>
          </div>
        ) : (<></>)
      }
    </div>
  )
}
