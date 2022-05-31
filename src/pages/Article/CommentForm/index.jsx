import React from 'react';
import { Form, Input, Button, InputNumber, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { reqQQ } from '../../../api/index'
import './index.css';

export default function CommentForm() {
  // 根据 QQ 号自动获取头像和邮箱
  // https://q1.qlogo.cn/g?b=qq&nk=1037395462&s=100
  const getQQ = async (e) => {
    const qqNum = e.target.value
    const avatarImg = await reqQQ(qqNum)
    console.log('avatarImg', avatarImg);
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
            <Avatar size={64} icon={<UserOutlined />} />
          </Form.Item>
        </div>
        <div className='comment-user-info'>
          <div className='user-message'>
            <div className='user-qq-email'>
              <Form.Item
                label="QQ"
                name="QQ"
                wrapperCol={{ span: 16 }}
                rules={[{ required: true, message: '请输入QQ号' }]}
              >
                <Input onPressEnter={getQQ}/>
              </Form.Item>
              <Form.Item
                label="邮箱"
                name="email"
                wrapperCol={{ span: 16 }}
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
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  )
}
