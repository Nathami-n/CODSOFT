'use client'

import { ThemeProvider } from "next-themes"
import { useState, useEffect } from "react"

const Provider = ({
    children
}:{
    children: React.ReactNode
}) => {
    const [mounted, setMounted] = useState<boolean>(false); 
    
    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted) {
        return <>{children}</>;
    }
     return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}



export default Provider