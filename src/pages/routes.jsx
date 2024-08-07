import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SplashScreen from '../components/Splash';

const Login = lazy(() => import("./login/index"));

export const Pages = () => {
  return <Suspense fallback={<SplashScreen />}>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Suspense>;
};

