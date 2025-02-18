import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const Home = async () => {
  const snippet = await prisma.snippet.findMany();
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Home</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl">Snippets</h1>
        <Link href={`/snippet/new`}>
          <Button>New</Button>
        </Link>
      </div>

      {snippet?.map((item) => (
        <div className="flex justify-between items-center bg-slate-800 p-y-[5px] rounded-md my-[14px]" key={item.id}>
          <h1 className="text-white text-xl ml-2 ">{item.title}</h1>
          <Link href={`/snippet/${item.id}`}>
            <Button variant={'link'} className="mt-5 text-white ">View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Home;
