import { Flex } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Image from "../../Image";
import Drawer from "../../Antd/Drawer";
import Menu from "../../Antd/Menu";

const items = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One',
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
  },
];

const Leftbar = ({ collapsed, setCollapsed }) => {
  return (
    <Drawer
      placement="left"
      closable={false}
      open={!collapsed}
      onClose={() => setCollapsed(!collapsed)}
      width={250}
      className="rounded-e-lg px-0"
    >
      <Flex className="items-center justify-center">
        <Image src="logo.png" alt="logo" className="max-h-16" />
      </Flex>
      <Flex className="px-4 py-1 bg-bgPrimary mt-3" vertical>
        <h4 className="text-primary text-lg leading-5 font-medium">Bittu Yadav</h4>
        <div>
          <Link to="/profile" className="text-content text-xs font-medium">Edit Profile</Link>
        </div>
      </Flex>
      <Flex>
      <Menu
        mode="vertical"
        className="py-1"
        style={{ width: "100%" }}
        items={items}
      />
      </Flex>
    </Drawer>
  );
}

export default Leftbar;