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
          <div className="flex flex-col ">
           <NavbarSeren />
           {/* <NavbarTree />  */}
           
        
          {children}
          </div>
          <Footer/>
          
        </ThemeProvider>
        
  );
}
