import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SplashScreen from '../components/Splash';
import { AppLayout, FullPageLoader } from "../components";

const Login = lazy(() => import("./login/index"));
const Dashboard = lazy(() => import("./dashboard/index"));

const AppPages = () => {
  const auth = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.common);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(auth.redirectToLogin) {
      navigate("/login");
    }
  }, [auth.redirectToLogin]);

  if (!auth.isLoggedIn) {
    const pathWithoutSlash = location.pathname.replace("/", "");
    const redirectUrl=`${pathWithoutSlash}${location.search}`;
    return <Navigate to={`/?redirect-to=${redirectUrl}`} />;
  }

  return (
    <AppLayout>
      {isLoading && <FullPageLoader />}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AppLayout>
  );
};

export const Pages = () => {
  return <Suspense fallback={<SplashScreen />}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Login />} />
      <Route path="/*" element={<AppPages />} />
    </Routes>
  </Suspense>;
};

