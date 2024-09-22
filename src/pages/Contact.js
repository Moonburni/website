import React from 'react';
import { Row, Col, Card, Typography, Form, Input, Button } from 'antd';
import './contact.css'; // 引入自定义样式

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
function Contact() {
  return (
    <div>
      <div className="contact-us">
        <Card className="contact-card">
          <Title level={2}>联系我们</Title>
          <Paragraph>
            如果您有任何问题或需要进一步的帮助，请随时联系我们。我们期待与您合作！
          </Paragraph>
          <Row gutter={16}>
            <Col span={12}>
              <Title level={3}>联系信息</Title>
              <Paragraph>
                <strong>地址:</strong> xx市xx区xx街道123号
              </Paragraph>
              <Paragraph>
                <strong>电话:</strong> 123-456-7890
              </Paragraph>
              <Paragraph>
                <strong>邮箱:</strong> info@example.com
              </Paragraph>
            </Col>
            <Col span={12}>
              <Title level={3}>地图位置</Title>
              <div className="map-container">
                {/* 这里可以嵌入一个地图组件，例如Google Maps或百度地图 */}
                <iframe
                  title="map"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://map.baidu.com/search/%E6%9D%AD%E5%B7%9E%E5%B8%82/@13382475,3514398,12z?querytype=s&da_src=shareurl&wd=%E6%9D%AD%E5%B7%9E%E5%B8%82&c=75&src=0&pn=0&sug=0&l=13&b=(11556166,3538405;11617606,3570149)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
          <Title level={3}>联系表单</Title>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="姓名">
                  <Input placeholder="请输入您的姓名" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="邮箱">
                  <Input placeholder="请输入您的邮箱" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="消息">
              <TextArea rows={4} placeholder="请输入您的消息" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">发送</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Contact;