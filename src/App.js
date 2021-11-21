import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* NavBar */}
        <Navbar />

        {/* Home page */}
        <Home />


      </div>
    </Router>
  );
}

export default App;
