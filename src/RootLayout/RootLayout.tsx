"use client"
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components";
import NavbarExtra from '@/components/NavbarExtra/Navbar';



export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
          
       

        <ThemeProvider enableSystem={true} attribute="class">
          
          
          <div className="bg-white dark:bg-black border-appRed-100 hover:dark:border-appRed-100 dark:border-appCyan-100 hover:shadow-xl hover:shadow-appRed-100/30 shadow-xl shadow-appCyan-100/30 dark:drop-shadow-lg">      
        <NavbarExtra />
          </div>
          <div className="flex-grow">
          {children}
          </div>
          <Footer/>
          
        </ThemeProvider>
        
  );
}
