import React from 'react';
import { Layout } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import { Image } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import './app.css';

const App = () => {
  return (
    <Layout className="layout">
      <div className="layout-content">
        <Image
          width="100%"
          src="https://sun9-6.userapi.com/impf/dew2JIgMNVnJKycJYdgvGw_QiGFu9cfrnkaU4A/VDINGXg8qJ0.jpg?size=490x379&quality=96&sign=9a4e45e06205977ced3460bb0b709e28&type=album"
        />
        <Title level={3}>как вам понравилось первое занятие?</Title>
        <Paragraph>И что Вы хотели бы улучшить.</Paragraph>
        <TextArea showCount maxLength={100} />
      </div>
    </Layout>
  );
};

export default App;
