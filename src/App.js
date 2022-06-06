import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"
import Login from './pages/Login'
import {Route,Routes} from "react-router-dom"
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      
    <Navbar/>
        <Login></Login>
        {/* <Home></Home> */}
        <div>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
        </Routes>
      </div>
    
    </div>
  );
}

export default App;
