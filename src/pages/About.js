import React from 'react';
import { Layout, Row, Col, Card, Typography, Divider } from 'antd';
import './about.css';

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div>
      <div className="about-us">
        <Card className="about-card">
          <Title level={2}>关于我们</Title>
          <Paragraph>
            我们是一家专注于提供优质酒类产品的公司，致力于为客户提供高品质的酒类产品和卓越的服务。我们的团队由经验丰富的专业人士组成，拥有丰富的行业知识和经验。
          </Paragraph>
        </Card>

        <Divider />

        <Card className="about-card">
          <Title level={2}>供应链</Title>
          <Paragraph>
            我们拥有完善的供应链体系，与全球多个优质酒庄和供应商建立了长期稳定的合作关系。我们的供应链管理团队严格把控每一个环节，确保产品从生产到交付的每一个步骤都符合最高标准。
          </Paragraph>
        </Card>

        <Divider />

        <Card className="about-card">
          <Title level={2}>原材料</Title>
          <Paragraph>
            我们只选用最优质的原材料来酿造我们的酒类产品。我们的原材料来自世界各地的优质产区，经过严格的筛选和检测，确保每一瓶酒都拥有卓越的品质和口感。
          </Paragraph>
        </Card>
      </div>
    </div>
  );
}

export default About;