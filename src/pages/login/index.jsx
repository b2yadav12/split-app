import { useState, useEffect, useRef } from 'react';
import { Flex, Form, Button, Input as AInput, message } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Image } from "../../components";
import { FormItem, Input } from "../../components/Antd";
import { loginThunk, loginPageOpened } from "../../services/auth";
import { showLoader } from "../../services/common";

const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const formValues = Form.useWatch([], form);
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirectPath, setRedirectPath] = useState("");
  const location = useLocation();
  const messageShownRef = useRef(false);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loginPageOpened());
  }, []);

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate(redirectPath || '/dashboard');
    }
  }, [auth.isLoggedIn]);

  useEffect(() => {
    if(!messageShownRef.current && location.search && location.search.startsWith("?redirect-to=")) {
      messageShownRef.current = true;
      const redirectPath = location.search.replace("?redirect-to=", "");
      setRedirectPath(redirectPath);
      message.error("Please login to continue");

      navigate("/");
    }
  }, [location.search]);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then((res) => {
        setIsDisabled(!!res.errorFields?.length);
      })
      .catch((res) => {
        setIsDisabled(!!res.errorFields?.length);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, formValues]);

  const onFinish = async () => {
    dispatch(showLoader(true));
    const action = await dispatch(loginThunk({ email: formValues.mobile, password: formValues.password }));
    dispatch(showLoader(false));
    if(action.error) {
      message.error(action.error.message);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <Flex gap={12} vertical className="bg-bgBox shadow-md rounded-b-lg overflow-hidden w-full p-6">
        <Flex className="text-center">
          <Image localPath={`logo.png`} alt="Hisab" className="mx-auto mb-4 max-h-16" />
        </Flex>

        <Flex vertical>
          <h2 className="text-xl mt-2 font-semibold text-gray-950">Let's you in</h2>
          <Form className="mt-2" form={form} initialValues={{}} onFinish={onFinish} >
            <FormItem
              name="mobile"
              className="req"
              label="Mobile number"
              rules={[
                { required: true, message: 'mobile number is required' },
                { pattern: /^[0-9]{10}$/, message: 'valid 10-digit number allowed' }
              ]}
            >
              <Input
                prefix={'+91'}
                placeholder="Enter your mobile number"
              />
            </FormItem>

            <FormItem
              name="password"
              className="req"
              label="Password"
              rules={[
                { required: true, message: 'passowrd is required' }
              ]}
            >
              <AInput.Password
                className="w-100 p-2"
                type="password"
                placeholder="Password"
              />
            </FormItem>

            <FormItem>
              <Button onClick={onFinish} disabled={isDisabled} type="primary" block className="bg-black mt-4">
                Sign In
              </Button>
            </FormItem>

            <div className="text-center text-sm text-gray-500">
              New User? <Link to="/signup" className="text-blue-500">Sign up</Link>
            </div>
          </Form>
        </Flex>
      </Flex>
    </div>
  );
}

export default Login;