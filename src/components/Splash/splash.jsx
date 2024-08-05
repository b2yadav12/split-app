import React from 'react';
import { Flex, Layout, Typography } from 'antd';
import SvgLogo from "../../icons/logo";
import './style.css';

const { Content } = Layout;
const { Title, Text } = Typography;

const SplashScreen = () => {
  return (
    <Flex vertical={true} justify="space-between" style={{ height: '100vh' }}>
      <Flex justify="center" className="logo-container">
        <SvgLogo width={120} height={120} />
      </Flex>
    </Flex>
  );
};

export default SplashScreen;
