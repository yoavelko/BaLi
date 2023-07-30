import './App.css'
import { Route, Routes, Outlet } from "react-router-dom";
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import User from './assets/components/user/User';
import Admin from './assets/components/admin/Admin';
import { dateContext } from './contexts/dateContext';
import { useContext, useState } from 'react';
import EstablishmentID from './assets/components/EstablishmentID/EstablishmentID';
import { SocketProvider } from './contexts/SocketContext';

function App() {


  const date = new Date();
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  let hour = date.getHours();
  let min = date.getMinutes();
  if (hour.toString().length < 2) {
    hour = `0${date.getHours()}`
  }
  if (min.toString().length < 2) {
    min = `0${date.getMinutes()}`
  }

  const [today, setToday] = useState(dd + '/' + mm + '/' + yyyy)
  const [time, setTime] = useState(hour + ':' + min)

  return (
    <div id='app-container'>
      <SocketProvider>
        <dateContext.Provider value={{ today, setToday, time, setTime }}>
          <Routes>
            <Route path='/on-start/:id' element={<EstablishmentID />} />
            <Route path='/' element={<><Outlet /><Footer /></>}>
              <Route index element={<User />} />
              <Route path='/admin' element={<><Header /><Admin /></>} />
            </Route>
          </Routes>
        </dateContext.Provider>
      </SocketProvider>
    </div>
  )
}

export default App
