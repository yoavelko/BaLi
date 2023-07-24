import './App.css'
import { Route, Routes, Outlet } from "react-router-dom";
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import User from './assets/components/user/User';

function App() {

  return (
    <div id='app-container'>
      <Routes>
          <Route path='/' element={<><Header /><Outlet /><Footer /></>}>
            <Route index element={<User />} />
            <Route path='/login' element={<div></div>} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
