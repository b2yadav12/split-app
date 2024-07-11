import React from 'react';
import { Flex, Layout, Typography } from 'antd';
import './style.css';

const { Content } = Layout;
const { Title, Text } = Typography;

const SplashScreen = () => {
  return (
    <Flex justify="center" className="splash-screen">
      <Flex vertical={true} justify="space-between" className="splash-content">
        <Flex vertical>
          <Flex justify="center" className="logo-container">
            <img src="assets/logo.svg" alt="Splitwise Logo" className="logo" />
          </Flex>
          <div level={2} className="title">SPLITWISE</div>
        </Flex>
        <Text className="subtitle">Split bills the easy way</Text>
      </Flex>
    </Flex>
  );
};

export default SplashScreen;
