import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // const login=useSelector((state)=>state.login.showLogin)
  //  console.log("login",login);
  return (
    <div>
     <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login/>}/>
         {/* {login && <Route path='/home' element={<Home/>}/>} */}
        <Route path="/home" element={<Home/>}></Route>
       </Routes>
      </BrowserRouter>
      <ToastContainer/>
      </div>
  )
}

export default App

