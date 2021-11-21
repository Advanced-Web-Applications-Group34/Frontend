import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* NavBar */}
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="restaurants" element={<Restaurants/>} />
            <Route path="login" element={<Login/>} />
          </Routes>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
