import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import UserSignupForm from "./Components/UserSignupForm";
import ResSignupForm from "./Components/ResSignupForm";
import AdminView from "./Components/RestaurantForms/AdminView";
import Menu from "./Components/RestaurantForms/Menu";
import Cart from "./Components/Cart";
import RestaurantProduct from "./Components/RestaurantProduct";

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
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="cart" element={<Cart />} />
            <Route path="/restaurant/:id" element={<RestaurantProduct />} />
=======
=======
>>>>>>> 0599572248bdefd7c9774c25789901c42f1b0402
            <Route path="/login/SignUpForm" element={<SignUpForm/>} />
            <Route path="/login/SignUpForm/UserSignupForm" element={<UserSignupForm/>} />
            <Route path="/login/SignUpForm/ResSignupForm" element={<ResSignupForm/>} />
            <Route path="/login/SignUpForm/ResSignupForm/AdminView" element={<AdminView/>} />
            <Route path="/login/SignUpForm/ResSignupForm/AdminView/Menu" element={<Menu/>} />
            <Route path="/login/SignUpForm/ResSignupForm/AdminView/Menu/AdminMode" element={<AdminView/>} />
            <Route path="cart" element={<Cart/>} />
>>>>>>> 0599572248bdefd7c9774c25789901c42f1b0402
          </Routes>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
