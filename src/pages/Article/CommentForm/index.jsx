import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { myQQ, myEmail } from '../../../utils/constant'
import './index.css';

export default function CommentForm() {

  // 定义变量
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const [text, setText] = useState('')

  // 根据 QQ 号自动获取头像和邮箱
  // https://q1.qlogo.cn/g?b=qq&nk=1037395462&s=100
  const getQQ = async (e) => {
    const regQQ = /[1-9][0-9]{4,11}/
    if(regQQ.test(name)) {
      const avatarUrl = `https://q1.qlogo.cn/g?b=qq&nk=${name}&s=100`;
      const QQEmail = `${name}@qq.com`;
      setEmail(QQEmail);
      setAvatar(avatarUrl);
    }

  }


  // 处理提交表单
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('提交');
  }

  return (
    <div>
      {/* 评论表单控件 */}
      <Form className='comment-form'>
        <div className='avatar'>
          <Form.Item
            name="avatar"
            wrapperCol={{ span: 4 }}
          >
            <Avatar size={64} src={avatar ? avatar : 'https://joeschmoe.io/api/v1/random'}/>
          </Form.Item>
        </div>
        <div className='comment-user-info'>
          <div className='user-message'>
            <div className='user-qq-email'>
              <Form.Item
                label="昵称"
                name="name"
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
                wrapperCol={{ span: 16 }}
                rules={[
                  { pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/, message: '请输入正确的邮箱地址！' }
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className='comment-submit'>
              <Form.Item>
                <Button type="primary" onClick={handleSubmit}>发布</Button>
              </Form.Item>
            </div>
          </div>
          <div className='comment-content'>
            <Form.Item name='comment-content'>
              <Input.TextArea
                rows={4}
                rules={
                  { pattern: /^[\s\S]*.*[^\s][\s\S]*$/, message: '请输入内容再发布！' }
                }
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  )
}
