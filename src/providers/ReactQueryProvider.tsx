"use client"


import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

function ReactQueryProvider({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default ReactQueryProvider