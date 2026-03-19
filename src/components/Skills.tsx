import {
  FaReact,
  FaGitAlt,
  FaAndroid,
  FaPython,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiPandas,
  SiJavascript,
  SiArcgis,
  SiPostgresql,
  SiGoogleearthengine,
} from "react-icons/si";
import qgisImg from "../assets/qgis-seeklogo.png";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "Pandas", icon: <SiPandas /> },
    {
      name: "Power BI",
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/power-bi.svg"
          className="w-8"
        />
      ),
    },
    { name: " React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "ArcGIS Pro", icon: <SiArcgis /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Android Development", icon: <FaAndroid /> },
    { name: "Google Earth Engine", icon: <SiGoogleearthengine /> },
    {
      name: "QGIS",
      icon: <img src={qgisImg} className="w-8" />,
    },
  ];

  return (
    <section id="skills" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white-400 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 text-white rounded-xl flex flex-col items-center text-xl hover:scale-110 transition"
            >
              <div className="text-4xl mb-2 text-blue-400">{skill.icon}</div>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Skills />
    </div>
  );
}

export default App;
