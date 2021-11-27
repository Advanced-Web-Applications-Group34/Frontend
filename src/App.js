import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
//import UserForm from './Components/UserForm';
import UserSignupForm from "./Components/UserSignupForm";
//import UserSignupSuccess from './Components/UserSignupSuccess';

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
            <Route path="/login/SignUpForm" element={<SignUpForm/>} />
            <Route path="/login/SignUpForm/UserSignupForm" element={<UserSignupForm/>} />

          </Routes>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
