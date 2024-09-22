import React from 'react';
import './wines.css';
import { Col, Row, Card, Typography, Button } from 'antd';
const { Title, Paragraph } = Typography;

const wines = [
  {
    id: 1,
    name: '优质红酒',
    description: '这是一款来自法国波尔多地区的优质红酒，采用精选葡萄酿造而成。酒体饱满，口感丰富，带有浓郁的黑莓和黑醋栗香气，单宁柔和，余味悠长。适合搭配牛排、烤肉等红肉菜肴。',
    origin: '法国波尔多',
    year: 2018,
    alcohol: '13.5%',
    price: '￥399',
    color: '#8B6969',
  },
  {
    id: 2,
    name: '清爽白葡萄酒',
    description: '这是一款来自新西兰的清爽白葡萄酒，采用长相思葡萄酿造而成。酒体轻盈，口感清新，带有柑橘和青草的香气，酸度适中，适合搭配海鲜、沙拉等菜肴。',
    origin: '新西兰',
    year: 2020,
    alcohol: '12.5%',
    price: '￥299',
    color: '#698B69',
  },
  {
    id: 3,
    name: '陈年威士忌',
    description: '这是一款来自苏格兰的陈年威士忌，采用大麦酿造而成。酒体醇厚，口感复杂，带有烟熏和香草的香气，余味悠长。适合纯饮或搭配雪茄。',
    origin: '苏格兰',
    year: 1995,
    alcohol: '40%',
    price: '￥1299',
    color: '#69698B',
  },
];

function Wines() {
  return (
    <div>
      <div className="product-intro">
        {wines.map(wine => (
          <Card key={wine.id} className="product-card">
            <Row gutter={16}>
              <Col span={8}>
                <div className="product-image" style={{ backgroundColor: wine.color }}></div>
              </Col>
              <Col span={16}>
                <div className="product-description">
                  <Title level={2}>{wine.name}</Title>
                  <Paragraph>{wine.description}</Paragraph>
                  <Paragraph><strong>产地:</strong> {wine.origin}</Paragraph>
                  <Paragraph><strong>年份:</strong> {wine.year}</Paragraph>
                  <Paragraph><strong>酒精度:</strong> {wine.alcohol}</Paragraph>
                  <Paragraph><strong>价格:</strong> {wine.price}</Paragraph>
                  <Button type="primary">立即购买</Button>
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