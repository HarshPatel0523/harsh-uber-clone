import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();

// export const useCaptain = () => {
//     const context = useContext(CaptainContext)
//     if(!context) {
//         throw new Error('useCaptain must be used within a CaptainContext')
//     }
//     return useContext(CaptainContext);
// };

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    const login = (captainData) => {
        setCaptain(captainData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setCaptain(null);
        setIsAuthenticated(false);
    };

    const value = {
        captain,
        setCaptain,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        login,
        logout
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;