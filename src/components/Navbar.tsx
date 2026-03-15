function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#111",
        color: "white",
      }}
    >
      <h2>Faisal.dev</h2>

      <div>
        <a href="#about" style={{ margin: "0 10px", color: "white" }}>About</a>
        <a href="#skills" style={{ margin: "0 10px", color: "white" }}>Skills</a>
        <a href="#projects" style={{ margin: "0 10px", color: "white" }}>Projects</a>
        <a href="#contact" style={{ margin: "0 10px", color: "white" }}>Contact</a>
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

export default App;