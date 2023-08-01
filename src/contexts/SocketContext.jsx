import { createContext, useEffect } from "react";
import { io } from 'socket.io-client'
export const SocketContext = createContext();
import { HOST } from '../utils/UserRoutes'
import cookies from 'js-cookie'

export const SocketProvider = ({ children }) => {
  const socket = io(HOST);
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join-room', cookies.get('establishment'))
    })
  }, [])
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}