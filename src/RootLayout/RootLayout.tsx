"use client"
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components";

import NavbarTree from '@/components/NavbarTree/NavbarTree';

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
          
       

        <ThemeProvider enableSystem={true} attribute="class">
          
          
              
        
        
          <div className="flex flex-col min-h-screen h-auto">
          <NavbarTree />
          {children}
          </div>
          <Footer/>
          
        </ThemeProvider>
        
  );
}
