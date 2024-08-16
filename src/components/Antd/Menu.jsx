import { Menu } from 'antd';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    height: max-content;
    line-height: 1.5;
  }
  &.py-1 .ant-menu-item {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
`;

const AntdMenu = (props) => {
  return (
    <StyledMenu
      {...props}
    />
  );
}

export default AntdMenu;