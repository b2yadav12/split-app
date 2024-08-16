import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from "../../components";

const Login = () => {
  const [form] = Form.useForm();

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

        <Form className="mt-6" form={form}>
          <Form.Item
            label="Username/mobile number"
          >
            <Input className="w-100 p-3.5" placeholder="Enter your username/mobile number" />
          </Form.Item>

          <Form.Item
            label="Password"
          >
            <Input className="w-100 p-3.5" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block className="bg-black">
              Sign In
            </Button>
          </Form.Item>

          <div className="text-center text-sm text-gray-500">
            New User? <Link to="/signup" className="text-blue-500">Sign up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;