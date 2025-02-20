import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faMoon,faSun,faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
const Navbar = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  const moonIcon=<FontAwesomeIcon icon={faMoon}/>
  const sunIcon=<FontAwesomeIcon icon={faSun}/>
  const barIcon=<FontAwesomeIcon icon={faBars}/>
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href="#top">
          <h1 className="text-4xl font-bold">Basit...</h1>
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
      </nav>
    </>
  );
};

export default Navbar;
