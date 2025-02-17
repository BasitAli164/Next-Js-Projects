import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between   bg-gray-500 h-10 items-center w-full">
        <Link href="/" className="font-bold ml-10">
          Home
        </Link>
        <div className="flex gap-5 mr-10">
          <Link href="/performance" >Performance</Link>
          
          <Link href="/reliability">Reliability</Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
