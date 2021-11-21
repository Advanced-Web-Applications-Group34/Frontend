import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* NavBar */}
        <Navbar />
        
        {/* SearchBar */}
        <Searchbar />


      </div>
    </Router>
  );
}

export default App;
