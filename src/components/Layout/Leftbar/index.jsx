import { Flex } from "antd";
import { AppstoreOutlined, MailOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import Image from "../../Image";
import Drawer from "../../Antd/Drawer";
import Menu from "../../Antd/Menu";
import { logout } from "../../../services/auth";

const Leftbar = ({ collapsed, setCollapsed }) => {
  const dispatch = useDispatch();

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
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      onClick: () => {
        dispatch(logout());
      },
    },
  ];

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