import React, { useEffect } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import './index.css';
import { reqSaysList } from '../../api/index';
import { getSays } from '../../redux/features/saySlice';
import { myInfo } from '../../utils/constant';

export default function Says() {

  const dispatch = useDispatch()

  const getAllSays = async () => {
    const res = await reqSaysList()
    if (res.status === 0) {
      dispatch(getSays(res.data))
    }
  }

  useEffect(() => {
    getAllSays()
  }, [])

  // redux 中获取说说列表
  const saysList = useSelector(state => state.says).says

  return (
    <div className='says'>
      <div className='says-wrap'>
        <div className='says-header'>
          自言自语
        </div>
        <div className='says-list'>
          {
            saysList.map(says => {
              return (
                <div className='says-list-item'>
                  <div className='says-list-item-avatar'>
                    <Avatar size={48} src={myInfo.myAvatar}/>
                  </div>
                  <div className='says-list-item-content'>
                    {says.content}
                    <div className='says-creatTime'>
                      {moment(says.publishDate).format('YYYY-MM-DD hh:mm:ss')}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
