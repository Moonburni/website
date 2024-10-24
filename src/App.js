import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout, Menu, ConfigProvider } from 'antd';
import Home from './pages/Home';
import Wines from './pages/Wines';
import About from './pages/About';
import Contact from './pages/Contact';
import A from './img/image.png';
import './App.css';
import { WechatOutlined, WeiboOutlined, TaobaoOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;

const HeaderContent = () => {
  const location = useLocation();
  const [current, setCurrent] = useState([`${location.pathname}path`]);

  useEffect(() => {
    setCurrent([`${location.pathname}path`])
  }, [location]);

  const menuItems = [
    { key: '/path', label: <a href="/">首页</a>, onClick: ({ key }) => setCurrent([key]) },
    { key: '/winespath', label: <a href="/#/wines">酒类产品</a>, onClick: ({ key }) => setCurrent([key]) },
    { key: '/aboutpath', label: <a href="/#/about">关于我们</a>, onClick: ({ key }) => setCurrent([key]) },
    { key: '/contactpath', label: <a href="/#/contact">联系我们</a>, onClick: ({ key }) => setCurrent([key]) },
  ];
  return (
    <Header style={{ display: 'flex', alignContent: 'center', backgroundColor: 'white', marginBottom: '1px' }}>
      <div className="homelogo" />
      <Menu theme="light" mode="horizontal" selectedKeys={current} defaultSelectedKeys={['1']} items={menuItems} />
    </Header>
  )
}

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalItemHoverColor: '#c0302f',
            horizontalItemSelectedColor: '#c0302f',
          },
          Button: {
            defaultHoverBorderColor: '#c0302f',
            defaultHoverColor: '#c0302f',
            defaultActiveBorderColor: '#c0302f',
            defaultActiveColor: '#c0302f',
            groupBorderColor: '#c0302f',
            defaultBg: '#c0302f',
            defaultBorderColor: '#c0302f',
            defaultColor: '#ffffff'
          },
        },
      }}
    >
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
              <p><WechatOutlined />&nbsp;微信号：CJGYZJ </p>
              <div direction="vertical" style={{ color: '#fff' }}>
                {/* <div><WechatOutlined /> &nbsp; 17354141620 张女士</div> */}
              </div>
              <div style={{ marginTop: '20px' }}>
                <a href="https://item.taobao.com/item.htm?ut_sk=1.YzooxNQhy6sDAIZ07KBN/Goz_21380790_1729042037039.Copy.1&id=803740736718&sourceType=item&price=2376&suid=C2D0AB4C-D4CA-48A1-A507-F082CB4D0352&shareUniqueId=28732912817&un=021cab627b578f839f2917200ca32a93&share_crt_v=1&un_site=0&spm=a2159r.13376460.0.0&wxsign=tbwctm6XYNqh4nzViLSSoCeUlfm9cB9kuMbHxgVSoann6Cq0aEhJ582gipNv53Ycfisx7OtWlDuL0dBJU8aKPFf06_NKl6ERROL0x2XtQJq81Uctasc3ASCJg4zjAYCFeRB&tbSocialPopKey=shareItem&sp_tk=eEpnRjNsSjhkbGY%3D&cpp=1&shareurl=true&short_name=h.gvOYekpjuoLJAjf&bxsign=scdo2p-fY27MGChYiPmeJC6je87y_AqHiTluFbPgJEuPe92-e8L07RKZo4dTHOs9Eb38PpDoUfNRjRDWQb-s52SsGxkpGHJnj0mHp6PrMO5ql2isU0OPPXWzbgYS7nN6X82&tk=xJgF3lJ8dlf&app=chrome"><TaobaoOutlined style={{ fontSize: '24px', marginRight: 10 }} /></a>
              </div>
            </div>
            <div class="footer-section links">
              <h2>快速链接</h2>
              <ul>
                <li><a href="/">首页</a></li>
                <li><a href="/#/wines">酒类产品</a></li>
                <li><a href="/#/about">关于我们</a></li>
                <li><a href="/#/contact">联系我们</a></li>
              </ul>
            </div>
            <div class="footer-section contact-form">
              <h2>联系我们</h2>
              <div>17354141620 张女士</div>
            </div>
            <div class="footer-section qr-code">
              <h2>二维码</h2>
              <div style={{ backgroundImage: `url(${A})`, backgroundSize: 'contain', width: '100%', height: '180px', backgroundRepeat: 'no-repeat' }}></div>
            </div>
            <div class="footer-bottom">
              &copy; 2024 安徽藏金阁酒业有限公司 | 版权所有
            </div>
          </div>
        </footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
