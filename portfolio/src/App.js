import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Route path={'/'} exact component={Home} />
      {/* <Home /> */}
    </Router>
  );
}

export default App;
