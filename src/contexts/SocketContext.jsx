import { createContext, useEffect } from "react";
import { io } from 'socket.io-client'
export const SocketContext = createContext();
import {HOST} from '../utils/UserRoutes'

export const SocketProvider = ({children}) => {
    const socket = io(HOST);
    useEffect(() => {
        socket.on('connect', () => {
          socket.emit('join-room', 'Forcing you')
        })
      }, [])
    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}