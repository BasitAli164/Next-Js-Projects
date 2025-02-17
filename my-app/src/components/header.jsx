import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between  h-10 items-center w-full absolute z-10">
        <Link href="/" className="font-bold ml-10" title="Go to Home">
          Home
        </Link>
        <div className="flex gap-5 mr-10">
          <Link href="/performance"title="Go to Performance" >Performance</Link>
          
          <Link href="/reliability" title="Go to Reliability">Reliability</Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
