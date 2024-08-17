import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SplashScreen from '../components/Splash';
import { AppLayout } from "../components";

const Login = lazy(() => import("./login/index"));
const Dashboard = lazy(() => import("./dashboard/index"));

const AppPages = () => {
  return (
    <AppLayout>
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
      <Route path="/signup" element={<Login />} />
      <Route path="/*" element={<AppPages />} />
    </Routes>
  </Suspense>;
};

