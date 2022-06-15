import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';
import memoryUtils from './utils/memoryUtils';
import storageUtils from './utils/storageUtils';

// 引入 antd 的样式
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd'; /* antd 国际化组件 */
import zhCN from 'antd/lib/locale/zh_CN';

// localStorage 中存储了用户信息的话，就保存到内存中
const user = storageUtils.getUser()
memoryUtils.login_user = user

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
);

