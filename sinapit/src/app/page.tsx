import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const Home =async() => {
  const snippet=await prisma.snippet.findMany();
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href={`/snippet/new`}>
          <Button>New</Button>
        </Link>
      </div>
      <div>
        {
          snippet?.map((item)=>(
            <div className="flex justify-between gap-y-10" key={item.id}>
              <h1 className="text-white text-xl  bg-slate-300">{item.title}</h1>
              <Button className="mt-10">View</Button>
              
            </div>

          ))
        }
      </div>
    </div>
  );
};
export default Home;
