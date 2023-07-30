import { createContext, useEffect } from "react";
import { io } from 'socket.io-client'
import { HOSTio } from '../utils/SocketRoutes'
export const SocketContext = createContext();

export const SocketProvider = ({children}) => {
    const socket = io(HOSTio);
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