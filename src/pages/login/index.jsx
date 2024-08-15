import { Form, Input, Button, Select } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { Image } from "../../components";

const { Option } = Select;

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full p-6">
        <div className="text-center">
          <Image
            localPath={`logo.png`}
            alt="Hisab"
            className="mx-auto mb-4 max-h-32" />
        </div>
        <h2 className="text-xl font-semibold text-gray-950">Let's you in</h2>

        <Form className="mt-6">
          <Form.Item>
            <Input.Group compact>
              <Input className="w-100 p-3.5" placeholder="Enter your number" />
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