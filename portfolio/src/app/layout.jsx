'use client'
import {Ovo,Outfit} from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';

const outfit=Outfit({  
 subsets:["latin"],
 weight:[ "400", "500", "600", "700"]
 
})
const ovo=Ovo({
  subsets:["latin"],
  weight:["400"]
})



// export const metadata = {
//   title: "Basit's Portfolio",
//   description: "",
// };

export default function RootLayout({ children }) {
  const [isDarkMood,setIsDarkMood]=useState(true);
  useEffect(()=>{
    
  },[])
  useEffect(()=>{
    if(isDarkMood){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
  },[isDarkMood])
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
