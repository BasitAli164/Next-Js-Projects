import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className='mt-20'>
      <div className="text-center">
      <Link href="/">
          <h1 className="text-4xl  relative">
            <span className="absolute bottom-6  left-[-6px] font-bold ">.</span>
            Basit{" "}
            <span className="absolute bottom-[3.5px] right-[-6px] font-bold text-orange-200">
              .
            </span>
          </h1>
        </Link>
        <div className="">
          <Image/>
          opoali911@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Footer
