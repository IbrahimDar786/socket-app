import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useChat = () => {
    const [socket, setSocket] = useState(null);

    console.log(`token: ${localStorage.getItem('token')}`);

    useEffect(() => {
        const newSocket = io('http://localhost:5000', {
            auth: {
                token: localStorage.getItem('token'),
            },
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    return socket;
};

export default useChat;