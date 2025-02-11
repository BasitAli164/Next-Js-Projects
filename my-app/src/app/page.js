'use client';
export default function Home() {
  console.log("Hello how are you.....")
  const handleClick=()=>{
    console.log("clicking...")
    alert("Hello")
  }
  return (
    <>
    <h1>hello</h1>
    <button className="px-8 py-2 bg-sky-500 rounded-full m-2" onClick={handleClick}>Click me</button>
    </>
  );
}
