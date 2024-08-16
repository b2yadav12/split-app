import { Drawer } from "antd";

const Leftbar = ({ collapsed, setCollapsed }) => {
  return (
    <Drawer
      placement="left"
      closable={false}
      open={!collapsed}
      onClose={() => setCollapsed(!collapsed)}
      width={250}
      className="rounded-e-lg"
    >
      <div className="p-4">
        <h1>Leftbar</h1>
      </div>
    </Drawer>
  );
}

export default Leftbar;