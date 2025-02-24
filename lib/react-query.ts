'use client'
import { QueryClient, QueryClientContext } from '@tanstack/react-query';
import React from 'react';

type QueryClientProviderProps = {
    client?: QueryClient;
    children?: React.ReactNode;
};

export const QueryClientProvider = ({ client, children, }: QueryClientProviderProps) => {
    const [queryClient] = React.useState(() => client || new QueryClient());
    return (React.createElement(QueryClientContext.Provider, { value: queryClient }, children));
}
