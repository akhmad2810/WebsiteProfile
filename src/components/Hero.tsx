function Hero() {
  return (
    <section style={{ padding: "40px", background: "#f9fafb" }}>
      <h1 style={{ fontSize: "32px" }}>Hello, I'm Faisal</h1>
      <h2>Data Analyst • Geospatial • Web Developer</h2>
      <p>I love analyzing data and building web application.</p>
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