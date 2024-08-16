import { Drawer, Button } from 'antd';
import styled from 'styled-components';

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    border-top-right-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
  }
  &.px-0 .ant-drawer-body {
    padding-left: 0;
    padding-right: 0;
  }
`;

const AntdDrawer = (props) => {
  return (
    <StyledDrawer
      {...props}
    />
  );
}

export default AntdDrawer;