import { Form, Input, Button, Select } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { Image } from "../../components";

const { Option } = Select;

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-full p-6">
        <div className="text-center">
          <Image
            localPath={`logo.png`}
            alt="Taxify Logo"
            className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Let's you in</h2>
          <p className="text-gray-500 mt-1">Hey, You have been missed!</p>
        </div>

        <Form className="mt-6">
          <Form.Item>
            <Input.Group compact>
              <Select defaultValue="+1" className="w-1/4">
                <Option value="+1">+1</Option>
                <Option value="+91">+91</Option>
                {/* Add more options as needed */}
              </Select>
              <Input className="w-3/4" placeholder="Enter your number" />
            </Input.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" block className="bg-black">
              Get OTP
            </Button>
          </Form.Item>

          <div className="text-center text-sm text-gray-500">
            New User? <a href="#" className="text-blue-500">Sign up</a>
          </div>

          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Button
            type="default"
            block
            icon={<GoogleOutlined />}
            className="flex items-center justify-center"
          >
            Continue with Google
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;