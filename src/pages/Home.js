import React from 'react';
import { Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import './home.css';
import A from '../img/211728568370_.pic.jpg'
import B from '../img/221728568371_.pic.jpg'
import C from '../img/231728568373_.pic.jpg'
import D from '../img/261728568374_.pic_hd.jpg'
import E from '../img/281728568376_.pic_hd.jpg'
import F from '../img/301728568377_.pic_hd.jpg'
import G from '../img/181728568367_.pic_hd.jpg'
import H from '../img/161728568366_.pic_hd.jpg'

const contentStyle = {
  height: '100%',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wines');
  };

  return (
    <div className="ink-wash-background">
      <Carousel arrows infinite={false} style={{ width: '100%', height: '100%' }} autoplay>
        <div>
          <div style={contentStyle}>
            <div className="element">
              <div className="img1"></div>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="element">
              <div className="img2"></div>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="element">
              <div className="img3"></div>
            </div>
          </div>
        </div>
      </Carousel>
      <div style={{ width: '1200px', margin: 'auto' }}>
        <div className="title-separator">
          <h2>酒窖实景</h2>
          <div className="separator"></div>
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[A, B, C, D, E, F].map(item =>
                <img key={item}
                  src={item}
                  style={{
                    width: '300px', height: '200px', marginRight: '30px', marginTop: '15px', borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                  }} />)}
          </div>
        </div>
        <div className="title-separator">
          <h2>美酒鉴赏</h2>
          <div className="separator"></div>
        </div>
        <div style={{ width: '100%' }}>
          <div className="block-gallery">
            <div className="block-item large" style={{ backgroundImage: `url(${G})`}} onClick={() => handleClick()}>
              <div className="block-description">
                <h3>胭脂酒-天青52°系</h3>
                <p>在延续了传统原浆的厚重口感之下，因不断调试改良北方酒酿酒配方，最终 成型的胭脂酒酒香介于清香、兼香、浓香之间</p>
              </div>
            </div>
            <div className="block-item large" style={{ backgroundImage: `url(${H})`}} onClick={() => handleClick()}>
              <div className="block-description">
                <h3>胭脂酒-典雅60系</h3>
                <p>零勾兑，把一切交给时间，酒体以不同年份基酒同盟会通过黄金配比勾调 达到60度的绵柔浓醇的口感</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;