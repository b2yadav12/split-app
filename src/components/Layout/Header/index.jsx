import { Flex, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const Header = () => {
  return (
    <header className='bg-bgPrimary rounded-b-lg p-4 pb-3'>
      <Flex>
        <Button className="border-0" shape="circle" icon={<MenuOutlined />} />
        <h4 className="text-primary flex grow items-center justify-center w-100 font-semibold">Dashboard</h4>
      </Flex>
    </header>
  );
}

export default Header;