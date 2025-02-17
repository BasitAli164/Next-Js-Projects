import Link from "next/link"

const Navbar=()=>{
    return(
        <>
        <div className="flex justify-between  bg-gray-500 h-10 items-center">
            <Link href="/" className="font-bold">Home</Link>
            <div className="flex gap-5">
                <Link href="/performance">Performance</Link>
                <Link href="/reliability">Reliability</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar