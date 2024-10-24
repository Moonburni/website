import React from 'react';
import './wines.css';
import { Col, Row, Card, Typography, Button, Modal } from 'antd';
import G from '../img/181728568367_.pic_hd.jpg'
import H from '../img/161728568366_.pic_hd.jpg'
import A from '../img/image.png';

const { Title, Paragraph } = Typography;
const wines = [
  {
    id: 1,
    name: '胭脂酒-天青52°系',
    description: '在延续了传统原浆的厚重口感之下，因不断调试改良北方酒酿酒配方，最终 成型的胭脂酒酒香介于清香、兼香、浓香之间',
    origin: '胭脂米',
    year: 2018,
    alcohol: '52%',
    price: '￥-',
    img: G,
  },
  {
    id: 2,
    name: '胭脂酒-典雅60系',
    description: '零勾兑，把一切交给时间，酒体以不同年份基酒同盟会通过黄金配比勾调 达到60度的绵柔浓醇的口感',
    origin: '胭脂米',
    year: 2020,
    alcohol: '60%',
    price: '￥-',
    img: H,
  }
];

const info = () => {
  Modal.info({
    title: '请使用微信扫描二维码购买',
    closable: true,
    icon: false,
    content: (
      <div style={{ width: '100%' }}>
        <div style={{ backgroundImage: `url(${A})`, backgroundSize: 'contain', width: '100%', height: '180px', backgroundRepeat: 'no-repeat' }}></div>
      </div>
    ),
    footer: null
  });
};

function Wines() {
  return (
    <div>
      <div className="product-intro">
        {wines.map(wine => (
          <Card key={wine.id} className="product-card">
            <Row gutter={16}>
              <Col span={8}>
                <div className="product-image" style={{ backgroundImage: `url(${wine.img})` }}></div>
              </Col>
              <Col span={16}>
                <div className="product-description">
                  <Title level={2}>{wine.name}</Title>
                  <Paragraph>{wine.description}</Paragraph>
                  <Paragraph><strong>原料:</strong> {wine.origin}</Paragraph>
                  <Paragraph><strong>年份:</strong> {wine.year}</Paragraph>
                  <Paragraph><strong>酒精度:</strong> {wine.alcohol}</Paragraph>
                  <Paragraph><strong>价格:</strong> {wine.price}</Paragraph>
                  <Button onClick={info}>立即购买</Button>
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Wines;