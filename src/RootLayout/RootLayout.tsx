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
          
          
          <div className="">      
        <NavbarTree />
          </div>
          <div className="flex-grow">
          {children}
          </div>
          <Footer/>
          
        </ThemeProvider>
        
  );
}
