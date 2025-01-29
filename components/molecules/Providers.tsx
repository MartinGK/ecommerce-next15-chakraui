'use client';

import { Provider as ChakraProvider } from "@/components/ui/provider"
import { useState, useEffect } from 'react';

export function Provider({ children }: { children: React.ReactNode }) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        // this forces a rerender
        setHydrated(true)
    }, [])

    if (!hydrated) {
        // this returns null on first render, so the client and server match
        return null
    }
    
    return <ChakraProvider>{children}</ChakraProvider>;
}