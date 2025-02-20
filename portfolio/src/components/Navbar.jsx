import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const arrowIcon=<FontAwesomeIcon icon={faArrowRight}/>
  return (
    <>
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between">
    <Link href='/'>
    <h1 className="text-4xl font-bold">Basit...</h1>
    </Link>
    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About me</Link>
        </li>
        <li>
            <Link href="/service">Services</Link>
        </li>
        <li>
            <Link href="/skill">My Skills</Link>
        </li>
        <li>
            <Link href="/contact">Contact me</Link>
        </li>
    </ul>

    <div>
        <Link href="/contact">Contact<span className="w-1">{arrowIcon}</span></Link>
    </div>
    </nav>      
    </>
  )
}

export default Navbar
