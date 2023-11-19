"use client"


import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

function ReactQueryProvider({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryProvider