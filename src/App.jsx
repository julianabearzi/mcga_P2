import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routers/Routes';

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
