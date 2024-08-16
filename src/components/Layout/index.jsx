import React from "react";
import { Layout } from "antd";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
}

export default AppLayout;