import React, { useState } from 'react';
import { Route, Routes, useLocation, Switch } from 'react-router-dom';
import { Layout, Menu, Space, Typography } from 'antd';
import Home from './pages/Home';
import Wines from './pages/Wines';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import { WechatOutlined, WeiboOutlined, TaobaoOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const HeaderContent = () => {
  const location = useLocation();
  const [current, setCurrent] = useState([`${location.pathname}path`]);
  const menuItems = [
    { key: '/path', label: <a href="/">首页</a>, onClick: ({ key }) => setCurrent([key]) },
    { key: '/winespath', label: <a href="/#/wines">酒类产品</a>, onClick: ({ key }) => setCurrent([key]) },
    { key: '/aboutpath', label: <a href="/#/about">关于我们</a>, onClick: ({ key }) => setCurrent([key]) },
    { key: '/contactpath', label: <a href="/#/contact">联系我们</a>, onClick: ({ key }) => setCurrent([key]) },
  ];
  return (
    <Header style={{ display: 'flex', alignContent: 'center' }}>
      <div className="homelogo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={current} defaultSelectedKeys={['1']} items={menuItems} />
    </Header>
  )
}

function App() {
  return (
    <Layout className="layout">
      <HeaderContent />
      <Content>
        <div className="site-layout-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/wines" element={<Wines />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Content>
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section about">
            <h2>关于我们</h2>
            <p>xxx</p>
            <div direction="vertical" style={{ color: '#fff' }}>
              <div><WechatOutlined /> &nbsp; 123-456-7890</div>
              <div><WechatOutlined /> &nbsp; info@example.com</div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="#"><WechatOutlined style={{ fontSize: '24px', marginRight: 10 }} /></a>
              <a href="#"><WeiboOutlined style={{ fontSize: '24px', marginRight: 10 }} /></a>
              <a href="#"><TaobaoOutlined style={{ fontSize: '24px', marginRight: 10 }} /></a>
            </div>
          </div>
          <div class="footer-section links">
            <h2>快速链接</h2>
            <ul>
              <li><a href="#">首页</a></li>
              <li><a href="#">关于我们</a></li>
              <li><a href="#">服务</a></li>
              <li><a href="#">联系我们</a></li>
            </ul>
          </div>
          <div class="footer-section contact-form">
            <h2>联系我们</h2>
            {/* tel: 1234561122 */}
            {/* <form action="#" method="post">
              <input type="email" name="email" class="text-input contact-input" placeholder="您的邮箱地址..." />
              <textarea name="message" class="text-input contact-input" placeholder="您的消息..."></textarea>
              <button type="submit" class="btn btn-primary">发送</button>
            </form> */}
          </div>
          <div class="footer-section qr-code">
            <h2>二维码</h2>
            <div style={{ width: '150px', height: '150px', background: '#eee' }}>
            </div>
          </div>
          <div class="footer-bottom">
            &copy; 2024 公司名称 | 版权所有
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export default App;
