import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen pt-32 flex flex-col justify-center items-center justify-center text-center">
      <motion.div
      initial={{ opacity:0, y:50}}
      animate={{ opacity: 1, y:0}}
      transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Faisal</span>
        </h1>

        <p className="text-gray-400 text-lg mb-6">
            Data Analyst • Web Developer • GIS Enthusiast
        </p>

        <a 
        href="#projects"
        className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-white-600 transition">
          View My Work
        </a>
      </motion.div>
    
    </section>
  );
}

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;