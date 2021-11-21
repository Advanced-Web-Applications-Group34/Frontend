import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* NavBar */}
        <Navbar/>


      </div>
    </Router>
  );
}

export default App;
