import Image from "next/image";
import profileImage from "../assets/img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faArrowRight,faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button } from "./ui/button";
const Header = () => {
  {
    /* -----Icons----- */
  }
  const handIcon = <FontAwesomeIcon icon={faHand} />
  const rightArrowIcon = <FontAwesomeIcon icon={faArrowRight} />
  const downloadIcon=<FontAwesomeIcon icon={faDownload}/>
  return (
    <div>
      <div>
        <Image
          src={profileImage}
          alt="Profile-Image"
          className="rounded-full w-28"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Basit Ali <li className="block text-red-600 ">{handIcon}</li>
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full stack web developer based in Skardu.
        <p className="max-w-2xl mx-auto font-Ovo text-lg">
          I am a full stack developer from Skardu, Gilgit Baltistan with 7
          months of experience in mulitple skills like frontend ,backend, and
          database.
        </p>
      </h1>
      <div>
        <Link href="/contact" >
          <Button className="px-10 py-6 border rounded-full border-gray-500 flex items-center gap2">
            Contact Me <span>{rightArrowIcon}</span>
          </Button>
        </Link>
        <Link href="/sample-resume.pdf" download >
          <Button className="px-10 py-6 border rounded-full border-gray-500 flex items-center gap2">
            My Resume <span>{downloadIcon}</span>
          </Button>
        </Link> 
      </div>
    </div>
  );
};

export default Header;
