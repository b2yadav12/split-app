import { useState } from 'react';
import { Flex, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Leftbar from '../Leftbar';
const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <header className='bg-bgPrimary rounded-b-lg p-4 pb-3'>
      <Leftbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Flex>
        <Button onClick={toggleCollapsed} className="border-0" shape="circle" icon={<MenuOutlined />} />
        <h4 className="text-primary flex grow items-center justify-center w-100 font-semibold">Dashboard</h4>
      </Flex>
    </header>
  );
}

export default Header;