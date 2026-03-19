import { useState, useEffect } from "react";



export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark){
      document.documentElement.classList.add("dark")
    } else{
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <nav  className="fixed top-0 left-0 w-full z-50  bg-whit/80e backdrop-blur-md shadow-md  dark:bg-slate-900/80 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
     
    
      <h1 className="font-bold text-2xl text-blue-500">Faisal's portfolio
      </h1>


      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
      <button onClick={() => setDark(!dark)} className="bg-gray-700 text-white px-4 py-2 rounded">
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export { App };