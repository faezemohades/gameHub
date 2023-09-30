"use client"
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';


const Providers =({ children }: {children:React.ReactNode}) => {
  return ( 
    <ThemeProvider>
    {children}
    </ThemeProvider>
    )
}

export default Providers;