import { useRouter } from "next/navigation "
const LearnUseRouter = () => {
    const router=useRouter();
    console.log("Learn useRouter hook",router);
  return (
    <div>
      <h1>Use Router Hook</h1>
      <button>Goo...</button>
    </div>
  )
}

export default LearnUseRouter
