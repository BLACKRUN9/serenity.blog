"use client"
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components";
import NavbarSeren from '../components/NavbarSeren/NavbarSeren'
// import NavbarTree from '@/components/NavbarTree/NavbarTree';
// import { Dropdown }  from "@/components"; 
export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
          
       

        <ThemeProvider enableSystem={true} attribute="class">
          <div className="flex flex-col min-h-screen h-full">
           {/* <NavbarTree />  */}
          <div className="">
          <NavbarSeren />
          </div>
          
        
          {children}
          </div>
          <Footer/>
          
        </ThemeProvider>
        
  );
}
