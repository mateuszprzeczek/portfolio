import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
