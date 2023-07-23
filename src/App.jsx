import './App.css'
import { Route, Routes, Outlet } from "react-router-dom";
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import Homepage from './assets/components/homepage/Homepage';
import Login from './assets/components/login/Login';


function App() {

  return (
    <div id='app-container'>
      <Routes>
          <Route path='/' element={<><Header /><Outlet /><Footer /></>}>
            <Route index element={<Homepage />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
