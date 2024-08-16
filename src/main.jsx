import React from 'react'
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { tailwindColors } from '../tailwind-vars';
import App from './App.jsx'
import './index.css'

const theme = {
  token: {
    colorPrimary: tailwindColors.primary,
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
