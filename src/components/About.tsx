import profilejpg from "../assets/profile.jpg.jpeg";

function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* FOTO */}
        <div className="flex-justify-center w-full" data-aos="fade-right">
          <img
            src={profilejpg}
            alt="Faisal"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-600 mb04 leading-relaxed">
            Hi, I'm <span className="font-semibold text-blue-500">Faisal</span>,
            a passionate <b>Data Analyst</b> and <b>Web Developer</b> with a
            strong interest in <b>Geospatial Technology</b>.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            I enjoy transforming complex datasets into meaningful insights and
            building modern, user-friendly web applications that solve
            real-world problems.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Currently, I focus on developing projects in
            <span className="text-blue-500 font-medium">Data Analysis</span>,
            <span className="text-blue-500 font-medium">
              {" "}
              Dashboard Development
            </span>
            ,
            <span className="text-blue-500 font-medium"> Spatial Analysis</span>
            , and
            <span className="text-blue-500 font-medium"> Web GIS</span>
          </p>
        </div>

        {/* STATS */}
        <div className="flex gap-8">
          <div>
            <h4 className="text-3xl font-bold text-black-400">5+</h4>
            <p className="text-red-500"> Projects</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-black-400">10+</h4>
            <p className="text-red-500">Technologies</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-black-400">1+</h4>
            <p className="text-red-500">Year Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <About />
    </div>
  );
}

export default App;
