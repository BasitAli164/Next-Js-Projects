import {Poppins} from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';

const poppinsFont=Poppins({  
 subsets:["latin"],
 weight:[ "400", "500", "600", "700"]
 
})



export const metadata = {
  title: "Basit's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased` }>
        <Navbar/> 
        {children}
      </body>
    </html>
  );
}
