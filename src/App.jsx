import './App.css'
import { Route, Routes, Outlet } from "react-router-dom";
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import User from './assets/components/user/User';
import Admin from './assets/components/admin/Admin';
import EstablishmentID from './assets/components/EstablishmentID/EstablishmentID';
import { SocketProvider } from './contexts/SocketContext';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import Statistics from './assets/components/statistics/Statistics';

function App() {

  return (
    <div id='app-container'>
      <SocketProvider>
        <Routes>
          <Route path='/' element={<><Outlet /><Footer /></>}>
            <Route index element={<User />} />
            <Route path='/admin' element={<><Header /><Admin /></>} />
            <Route path='/statistics' element={<><Header /><Statistics /></>} />
            <Route path='/on-start/:id' element={<EstablishmentID />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </SocketProvider>
    </div>
  )
}

export default App
