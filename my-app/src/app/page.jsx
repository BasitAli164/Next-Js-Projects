"use client"
import LearnUseRouter from '@/components/LearnUseRouter';
import Counter from '../components/counter/page'
import LearnLink from '@/components/counter/Link';
import style from '../css/style.module.css'
import Image from 'next/image';
import myImage from '../../public/img/picture.png'
export default function Home() {
  console.log("Hello how are you.....")
 
  return (
    <>
    <h1>hello</h1>
    <Image src={myImage} alt='not found'/>
    <img src={myImage} alt="not" />
    <p className={style.main}>Lorem, lkasfld ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus autem eius cupiditate hic, expedita adipisci facilis explicabo, maxime iusto dolores excepturi corporis maiores quibusdam aliquam doloribus nam necessitatibus inventore.</p>    
    <button className="px-8 py-2 bg-sky-500 rounded-full m-2" >Click me</button>
    <Counter/>
    {/* <LearnLink/> */}
    {/* <LearnUseRouter/> */}
    </>
  );
}
