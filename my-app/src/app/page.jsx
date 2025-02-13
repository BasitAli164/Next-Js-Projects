"use client"
import Counter from '../components/counter/page'
import LearnLink from '@/components/counter/Link';
export default function Home() {
  console.log("Hello how are you.....")
 
  return (
    <>
    <h1>hello</h1>
    <p>Lorem, lkasfld ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus autem eius cupiditate hic, expedita adipisci facilis explicabo, maxime iusto dolores excepturi corporis maiores quibusdam aliquam doloribus nam necessitatibus inventore.</p>    
    <button className="px-8 py-2 bg-sky-500 rounded-full m-2" >Click me</button>
    <Counter/>
    <LearnLink/>
    </>
  );
}
