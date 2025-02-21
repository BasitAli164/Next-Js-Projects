import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faMoon,faSun,faBars,faClose } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
const Navbar = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  const moonIcon=<FontAwesomeIcon icon={faMoon}/>
  const sunIcon=<FontAwesomeIcon icon={faSun}/>
  const barIcon=<FontAwesomeIcon icon={faBars}/>
  const crossIcon=<FontAwesomeIcon icon={faClose}/>
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href="#top">
          <h1 className="text-4xl  relative"><span className="absolute bottom-6  left-[-6px] font-bold">.</span>Basit <span className="absolute bottom-[3.5px] right-[-6px] font-bold">.</span></h1>
        </Link>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-25">
          <li>
            <Link href="/" className="font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-Ovo">
              About me
            </Link>
          </li>
          <li>
            <Link href="/service" className="font-Ovo">
              Services
            </Link>
          </li>
          <li>
            <Link href="/skill" className="font-Ovo">
              My Skills
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-Ovo">
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
            <Button variant="icon" className=" ">{moonIcon}</Button>

          <Link href="/contact">
            {" "}
            <Button className="rounded-full hidden lg:flex items-center gap-2 px-7 py-5  border border-gray-500 ml-4 text-lg font-Ovo">
              {" "}
              Contact <span className="rotate-[-40deg]">{arrowIcon}</span>
            </Button>
          </Link>
          <Button className="block md:hidden ml-3" variant="destructive">{barIcon}</Button>
        </div>
        {/* ------------ Mobile Menu ------------*/}
        <ul className="md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 z-50 w-64 h-screen bg-rose-50 transition duration-500">
          <div className="absolute right-6 top-6"><li className="w-5 cursor-pointer">{crossIcon}</li></div>
          <li>
            <Link href="/" className="font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-Ovo">
              About me
            </Link>
          </li>
          <li>
            <Link href="/service" className="font-Ovo">
              Services
            </Link>
          </li>
          <li>
            <Link href="/skill" className="font-Ovo">
              My Skills
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-Ovo">
              Contact me
            </Link>
          </li> 

        </ul>
      </nav>
    </>
  );
};

export default Navbar;
