import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Router =
  process.env.REACT_APP_GH_PAGES === 'true' ? HashRouter : BrowserRouter;

root.render(
  <Router>
    <App />
  </Router>
);
