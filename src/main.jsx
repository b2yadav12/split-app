import React from 'react'
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { ApolloProvider } from '@apollo/client';
import { httpClient } from './apolloClient';
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
      <ApolloProvider client={httpClient}>
        <App />
      </ApolloProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
