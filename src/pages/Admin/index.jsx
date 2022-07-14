import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom'
import { message } from 'antd';


import './index.css';
import { reqCategories } from '../../api/index';
import { getCategories } from '../../redux/features/categorySlice'

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Home from '../Home';
import Says from '../Says';
import Message from '../Message';
import Article from '../Article';
import About from '../About'


// 特色jdlkashjflkasjfdlkasjflkdjlsafdjlksjfdlk

export default function Admin() {

  const dispatch = useDispatch()

  // 获取所有分类
  const getAllCategories = async () => {
    const res = await reqCategories()
    if (res.status === 0) {
      // 将数据放到 redux 中
      dispatch(getCategories(res.data))
    } else {
      message.error('获取列表失败！😔')
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])


  return (
    <div className='admin' id="body-wrap">
       <Header />
      {/* 路由跳转 */}
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/article' element={<Article/>}></Route>
        <Route path='/says' element={<Says/>}></Route>
        <Route path='/messages' element={<Message/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Navigate to='/home'/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}
