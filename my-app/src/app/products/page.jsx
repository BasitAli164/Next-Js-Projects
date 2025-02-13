const Header = () => {
  return (
    <div className={`flex justify-between bg-sky-400 h-12 items-center`} >
      <div>
        <h2 className="text-2xl font-bold  uppercase ">Logo</h2>
      </div>
      <div>
        <ul className="flex gap-3 font-bold">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Service</a></li>
        </ul>

      </div>
      
      <div>
        <input type="text" />
        <button className="px-4 py-[2px] rounded-full mx-1 bg-sky-800 ">search</button>
      </div>
    </div>
  )
}


export default Header
