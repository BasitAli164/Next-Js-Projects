'use client'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import AboutPage from './about/page'
import SkillPage from './skill/page'
import ContactPage from './contact/page'
import { faL } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  const [isDarkMood,setIsDarkMood]=useState(true);
  useEffect(()=>{
    if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsDarkMood(true)

    }else{
      setIsDarkMood(false)

    }
    
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
    <div>
      <Header/>
      <AboutPage/>
      <SkillPage/>
      <ContactPage/>
    </div>
  )
}

export default Home
