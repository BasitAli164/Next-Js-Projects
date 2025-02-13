import { useRouter } from "next/router"
const LearnUseRouter = () => {
    const router=useRouter();
    console.log("Learn useRouter hook",router);
  return (
    <div>
      <h1>Use Router Hook</h1>
      <button onClick={()=>router.push('/profile')}>Goo...</button>
    </div>
  )
}

export default LearnUseRouter
