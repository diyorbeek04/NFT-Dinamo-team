import { dividerClasses } from '@mui/material';
import './App.css';
import Layout from './layout';
import HomePage from './pages/homePage';
import RouterComponent from './route';

function App() {
  return (
    <Layout>
      <RouterComponent>
        <HomePage/>
      </RouterComponent>
    </Layout>
  );
}

export default App;
