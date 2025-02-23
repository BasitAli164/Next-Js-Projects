import {Ovo,Outfit} from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit=Outfit({  
 subsets:["latin"],
 weight:[ "400", "500", "600", "700"]
 
})
const ovo=Ovo({
  subsets:["latin"],
  weight:["400"]
})



export const metadata = {
  title: "Basit's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en" className=' '>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-6 overflow-x-hidden scroll-smooth dark:bg-darkTheme dark:text-white` }>
        <Navbar/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
