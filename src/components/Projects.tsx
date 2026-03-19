import Salesdatapng from "../assets/Salesperproduct.png";
import Clusteringpng from "../assets/Clustering.png";
import Webgispng from "../assets/Webgis.png";
import { useState, useEffect } from "react";
import AndroidApppng from "../assets/AndroidApp.jpeg";
import GEEpng from "../assets/GEE.png";

import {motion} from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";




function Projects() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  
  
  const projects = [
    {
      title: "Sales Data Analysis",
      desc: "Analyzed sales dataset using Python and Pandas.",
      img: Salesdatapng,
      link:"https://github.com/akhmad2810/Sales-Data-Analysis",
      type: "github",
    },
    {
      title: "Clustering Analysis",
      desc: "Clustering analysis for customer groups.",
      img: Clusteringpng,
      link:"https://github.com/akhmad2810/Clustering.git",
      type: "github",
    
    },
    {
      title: "Web GIS Application",
      desc: "Interactive spatial history application.",
      img: Webgispng,
      type: "github",

    },
    {
      title:"Android App Project",
      desc: "Developed an Android App using Kotlin language",
      img: AndroidApppng,
      link:"https://github.com/akhmad2810/Historiaapp",
      type:"github",
    },
    {
      title : "Google Earth Engine Project",
      desc : "Analyzed satellite imagery with Google Earth Engine",
      img : GEEpng,
      link:"https://code.earthengine.google.com/d3d883549924f06c3ba0ca2effa75d2d",
      type:"gee",
    }
  ];
  
//Perpindahan Slide
useEffect(() => {
  const interval = setInterval(() => {
    next();
  },3000);
  return() => clearInterval(interval);
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev+1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev -1 +projects.length) % projects.length);
  };

  // Konsisten menampilkan 3 project
  const visibleProjects = [
    projects[index % projects.length],
    projects[(index +1) % projects.length ],
    projects[(index +2) % projects.length],
  ];


  return (
    <section id="projects" className="bg-gray-50 py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="relative max-2-6xl mx-auto">
        
        {/* Button Left */}
        <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
         >
          <FaChevronLeft/>
         </button>

     
     {/* Slide */}
      <motion.div 
      className="grid md:grid-cols-3 gap-8"
      drag="x"
      dragConstraints={{ left: 0, right:0}}
      onDragEnd={(_e, info) =>{
        if(info.offset.x < -50) next();
        if(info.offset.x > 50) prev();
      }}>

        {visibleProjects.map((project, i) => (
          <motion.div
           key={i}
           className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition cursor-pointer"
           onClick={() => window.open(project.link, "_blank")}
           >
            {/* IMAGE */}
            <div className="h-64 overflow-hidden">
              <img
                 src={project.img}
                 onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImg(project.img);
                 }}
                className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
              />
                </div>

                <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.desc}
                </p>
                </div>
                </motion.div>
))}
      </motion.div>
        
     {/* Button right */}
       <button
       onClick={next}
       className="absolute right-0 top-1/2 -translate-y-1/2 bg-2hite shadow p-3 rounded-full z-10"
        >
          <FaChevronRight />
        </button>
           </div>
          {/* Indicator */}
          <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, i) => (
          <div
          key={i}
          className={`w-3 h-3 rpunded-full ${
            i === index ? "bg-blue-500" : "bg-gray-300"
          }`}
         /> 
        ))}
         </div>

         {/* FullScreen Image */}
         {selectedImg && (
          <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
          >
            <img 
            src={selectedImg}
            className="max-h-[90%] max-w-[90%] rounded-xl"
            />
          </div>
        )}
    </section>
  );
}

export default Projects;
