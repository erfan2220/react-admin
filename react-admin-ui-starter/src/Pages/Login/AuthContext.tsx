import { createContext, useContext, useState } from 'react';

// Define the type for the context value
type AuthContextType = {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context with the defined type
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the AuthProvider component with children prop
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [login, setLogin] = useState(false);

    return (
        <AuthContext.Provider value={{ login, setLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

// Define the useAuth hook with the defined type
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
