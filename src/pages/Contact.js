import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import './contact.css'; // 引入自定义样式
import A from '../img/image.png';

const { Title, Paragraph } = Typography;
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
                <strong>地址:</strong> 安徽省合肥市蜀山区望江西路印象西湖花园公建区西组团2-2217
              </Paragraph>
              <Paragraph>
                <strong>电话:</strong> 17354141620 张女士
              </Paragraph>
              <Paragraph>
                <strong>邮箱:</strong> 1260267729@qq.com
              </Paragraph>
            </Col>
            <Col span={12}>
              {/* <Title level={3}>地图位置</Title> */}
              {/* <div className="map-container"> */}
              {/* 这里可以嵌入一个地图组件，例如Google Maps或百度地图 */}
              {/* <iframe
                  title="map"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://map.baidu.com/search/%E6%9D%AD%E5%B7%9E%E5%B8%82/@13382475,3514398,12z?querytype=s&da_src=shareurl&wd=%E6%9D%AD%E5%B7%9E%E5%B8%82&c=75&src=0&pn=0&sug=0&l=13&b=(11556166,3538405;11617606,3570149)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2"
                  allowFullScreen
                ></iframe> */}
              {/* </div> */}
            </Col>
          </Row>
          <Title level={3}>二维码</Title>
          <div class="qr-code">
            <div style={{ backgroundImage: `url(${A})`, backgroundSize: 'contain', width: '100%', height: '180px', backgroundRepeat: 'no-repeat' }}></div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Contact;