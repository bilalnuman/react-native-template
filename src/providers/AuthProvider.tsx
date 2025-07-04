import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { useMe } from '@/features/Auth/hooks/QueryHook';

interface AuthContextType {
    isAuthenticated: boolean | null;
    isLoading: boolean;
    user: any;
    isInitialized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const { isAuthenticated } = useAuthStore();
    const [isInitialized, setIsInitialized] = useState(false);
    const { data: user, isLoading, isSuccess, isError } = useMe(isAuthenticated === true);

    useEffect(() => {
        if (!isAuthenticated || isSuccess || isError) {
            setIsInitialized(true);
        }
    }, [isAuthenticated, isSuccess, isError]);

    const value: AuthContextType = {
        isAuthenticated,
        isLoading: isAuthenticated ? isLoading : false,
        user,
        isInitialized,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};