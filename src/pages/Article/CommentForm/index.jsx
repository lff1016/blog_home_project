import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, InputNumber, Avatar, message } from 'antd';
import { useDispatch } from 'react-redux/es/exports';
import { UserOutlined } from '@ant-design/icons';

import { default_avatar } from '../../../utils/constant'
import './index.css';
import { reqAddUser, reqCommentAdd, reqCommentList } from '../../../api/index';
import memoryUtils from '../../../utils/memoryUtils';
import storageUtils from '../../../utils/storageUtils';
import { getComments } from '../../../redux/features/commentSlice'

export default function CommentForm({isReply, aid, replyId}) {

  const [form] = Form.useForm()
  // 定义变量
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')

  // 根据 QQ 号自动获取头像和邮箱
  // https://q1.qlogo.cn/g?b=qq&nk=1037395462&s=100
  const getQQ = async () => {
    const regQQ = /[1-9][0-9]{4,11}/
    if (regQQ.test(name)) {
      const avatarUrl = `https://q1.qlogo.cn/g?b=qq&nk=${name}&s=100`
      const QQEmail = `${name}@qq.com`
      setEmail(QQEmail)
      setAvatar(avatarUrl)
      // 更改邮箱的值
      form.setFieldsValue({ email: QQEmail })
    }

  }
  
  // redux 中获取评论
  const dispatch = useDispatch()
  
  const getAllComments = async (aid) => {
    const res = await reqCommentList(aid)
    if(res.status === 0) {
      dispatch(getComments(res.data))
    } else {
      message.error('获取评论失败😔！')
    }
  }


  // 加载时判断内存中是否有记录过用户，若存在就直接填充表单的用户信息
  const formRef = useRef()
  const getLoginUser = () => {
    if(memoryUtils.login_user._id) {
      const user = memoryUtils.login_user
      setAvatar(user.avatar[0])
      formRef.current.setFieldsValue({
        username: user.username,
        email: user.email
      })
    }
  }
  
  useEffect(() => {
    getLoginUser()
  }, [])


  // 处理提交表单
  const handleSubmit = async (e) => {
    // 验证表单
    try {
      let {username, email, content} = await form.validateFields()
      let user = {username, email, avatar: avatar ? [avatar] : [default_avatar]}
      const postUser = await reqAddUser(user)

      if (postUser.status === 0 || 2) {
        // 在内存中保存用户信息
        const homeUser = postUser.data
        memoryUtils.login_user = homeUser
        storageUtils.saveUser(homeUser)

        let comment = {aid, content, uid: homeUser._id, replyId}
        const postCommentAdd = await reqCommentAdd(comment)
        console.log('postCommentAdd', postCommentAdd);
        if(postCommentAdd.status === 0) {
          message.success(`${replyId !== 0 ? '回复': '评论'}成功😀！`)
          // 重新获取 redux 中的评论数据
          getAllComments(aid)
        }
      }
    } catch (err) {
      console.log('提交表单错误', err);
    }
  }

  return (
    <div>
      {/* 评论表单控件 */}
      <Form className='comment-form' form={form} ref={formRef}>
        <div className='avatar'>
          <Form.Item
            name="avatar"
            wrapperCol={{ span: 4 }}
          >
            {
              avatar ? (
                <Avatar size={64} src={avatar} />
              ) : (
                <Avatar size={64} icon={<UserOutlined />} />
              )
            }
          </Form.Item>
        </div>
        <div className='comment-user-info'>
          <div className='user-message'>
            <div className='user-qq-email'>
              <Form.Item
                label="昵称"
                name="username"
                wrapperCol={{ span: 16 }}
                rules={[
                  { required: true, message: '请输入QQ号' },
                  { pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,11}$/, message: '昵称仅限中文、数字、字母，长度2~11！' }
                ]}
              >
                <Input
                  onChange={e => setName(e.target.value)}
                  onPressEnter={getQQ}
                />
              </Form.Item>
              <Form.Item
                label="邮箱"
                name="email"
                value={email}
                wrapperCol={{ span: 18 }}
                rules={[
                  { pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/, message: '请输入正确的邮箱地址！' }
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className='comment-submit'>
              <Form.Item>
                <Button type="primary" onClick={handleSubmit}>{isReply ? '回复' : '发布'}</Button>
              </Form.Item>
            </div>
          </div>
          <div className='comment-content'>
            <Form.Item name='content'>
              <Input.TextArea
                rows={4}
                rules={
                  { pattern: /^[\s\S]*.*[^\s][\s\S]*$/, message: `请输入内容再${isReply ? '回复' : '发布'}！` }
                }
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  )
}
