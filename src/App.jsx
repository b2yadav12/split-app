import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import { tailwindColors } from '../tailwind-vars';
import { Pages } from './pages/routes';

const App = () => {

  console.log(`tailwindColors.primary`, tailwindColors.primary);

  return <Layout>
    <BrowserRouter basename="/split-app">
      <Pages />
    </BrowserRouter>
  </Layout>
};

export default App;