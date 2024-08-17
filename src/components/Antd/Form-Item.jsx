import { Form, Input } from 'antd';
import styled from 'styled-components';

const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label.text-sm > label {
    height: max-content;
  }
`;

const AntdFormItem = (props) => {
  return (
    <StyledFormItem
      {...props}
      labelCol={{ className: "text-primary font-medium text-sm" }}
    />
  );
}

export const AntdInput = (props) => {
  return (
    <Input className="w-100 p-2" {...props} />
  );
}

export default AntdFormItem;