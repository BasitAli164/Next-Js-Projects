import Link from "next/link"

const Navbar=()=>{
    return(
        <>
        <div className="flex justify-between ">
            <Link href="/" className="font-bold">Home</Link>
            <div className="flex gap-2">
                <Link href="/performance">Performance</Link>
                <Link href="/reliability">Reliability</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar