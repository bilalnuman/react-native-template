import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/providers/AuthProvider';
import AppNavigator from '@/navigation/AppNavigator';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

const AppRoot = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <AppNavigator />
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default AppRoot;