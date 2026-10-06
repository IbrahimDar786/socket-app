import { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from '../services/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) return;

        const fetchUser = async () => {
            try {
                const data = await getCurrentUser(token);

                if (data.success) {
                    setUser(data.user);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);