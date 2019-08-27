import React from 'react';
import { Row, Col } from 'antd';

import Section from '@/components/Section';
import Title from '@/components/SectionTitle';
import { getRelativePath } from '@/utils';
import styled from 'styled-components';

const LI = styled.li`
  font-size: 24px;
  font-weight: normal;
  font-family: HelveticaNeue-Light, -apple-system, system-ui, Arial, sans-serif;
`;

const Download: React.FC = () => (
  <Section background="rgb(125, 204, 243)">
    <Title id="download" margin="30px 0 0" color="rgb(28, 42, 77)">
      Experiene the universal DID service on BiiMe
    </Title>
    <Row
      style={{
        width: '100%',
        marginTop: 36,
        marginBottom: '40px',
        minHeight: 155,
      }}
    >
      <Col offset={2} xl={3} lg={4} md={4} sm={24} xs={24}>
        <img src={getRelativePath('/static/icon4@2x.png')} />
      </Col>
      <Col>
        <ul>
          <LI>Integrate multiple services cross ID system</LI>
          <LI>Retrieve data from uers authorization eaLIsy</LI>
          <LI>Manage all digital assets in one APP</LI>
        </ul>
      </Col>
    </Row>
  </Section>
);

export default Download;