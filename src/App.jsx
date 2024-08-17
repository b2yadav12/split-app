import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import { Pages } from './pages/routes';

const App = () => {

  return <Layout>
    <BrowserRouter basename="/split-app">
      <Pages />
    </BrowserRouter>
  </Layout>
};

export default App;