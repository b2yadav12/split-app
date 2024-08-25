import React from 'react'
import ReactDOM from 'react-dom/client';
import { ConfigProvider, App as AntdApp } from 'antd';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { httpClient } from './apolloClient';
import { store } from './services/store.jsx';
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
      <AntdApp>
        <Provider store={store}>
          <ApolloProvider client={httpClient}>
            <App />
          </ApolloProvider>
        </Provider>
      </AntdApp>
    </ConfigProvider>
  </React.StrictMode>
)
