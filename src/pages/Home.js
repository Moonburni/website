import React from 'react';
import { Carousel } from 'antd';
import './home.css';

const contentStyle = {
  height: '100%',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {
  return (
    <div>
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
        <div class="title-separator">
          <h2>美酒影视视频</h2>
          <div class="separator"></div>
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[0, 1, 2, 4, 5, 6].map(item => <div key={item}
              style={{
                width: '300px', height: '200px', background: '#eee', marginRight: '30px', marginTop: '15px', borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}></div>)}
          </div>
        </div>
        <div class="title-separator">
          <h2>美酒鉴赏</h2>
          <div class="separator"></div>
        </div>
        <div style={{ width: '100%' }}>
          <div class="block-gallery">
            <div class="block-item large" style={{ backgroundColor: '#8B6969' }}>
              <div class="block-description">
                <h3>美酒1</h3>
                <p>这是一款优质的红酒，口感醇厚，香气浓郁。</p>
              </div>
            </div>
            <div class="block-item medium" style={{ backgroundColor: '#698B69' }}>
              <div class="block-description">
                <h3>美酒2</h3>
                <p>这是一款清爽的白葡萄酒，适合夏日饮用。</p>
              </div>
            </div>
            <div class="block-item small" style={{ backgroundColor: '#698B8B' }}>
              <div class="block-description">
                <h3>美酒3</h3>
                <p>这是一款独特的起泡酒，口感细腻，气泡丰富。</p>
              </div>
            </div>
            <div class="block-item medium" style={{ backgroundColor: '#8B698B' }}>
              <div class="block-description">
                <h3>美酒4</h3>
                <p>这是一款陈年的红酒，带有复杂的果香和橡木桶的香气。</p>
              </div>
            </div>
            <div class="block-item small" style={{ backgroundColor: '#69698B' }}>
              <div class="block-description">
                <h3>美酒5</h3>
                <p>这是一款优雅的玫瑰酒，带有淡淡的花香和果香。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;