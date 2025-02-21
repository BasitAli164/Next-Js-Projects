import Header from '@/components/Header'
import React from 'react'
import AboutPage from './about/page'
import SkillPage from './skill/page'
import ContactPage from './contact/page'

const Home = () => {
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
