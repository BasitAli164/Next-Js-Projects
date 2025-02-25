import Header from '@/components/Header'
import AboutPage from './about/page'
import SkillPage from './skill/page'
import ContactPage from './contact/page'

export const metadata={
  title:"Home"
}


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
