import React from "react";
import { Spin } from "antd";

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50 opacity-30">
      <Spin size="large" />
    </div>
  );
};

export default FullPageLoader;
