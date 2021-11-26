import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import SignInForm from "./Components/SignInForm";
import Cart from "./Components/Cart";

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
            <Route path="login" element={<SignInForm/>} />
            <Route path="cart" element={<Cart/>} />
          </Routes>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
