import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href={`/snippet/new`}>
          <Button>New</Button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
