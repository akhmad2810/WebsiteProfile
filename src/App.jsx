import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function App() {
  const skills = {
    "Data Analyst": ["R", "SQL", "Python", "Tableau", "Power BI", "Google Looker Studio"],
    Geography: ["ArcGIS", "QGIS"],
    "Web Development": ["HTML", "CSS", "JavaScript", "PHP"],
    "Web & App Design": ["Figma"],
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", background: "#f9fafb" }}>
      <h1 style={{ fontSize: "32px" }}>Akhmad Faisal Zein</h1>
      <p>Data Analyst • Geospatial • Web Developer</p>

      <div style={{ marginTop: "16px" }}>
        <Button>GitHub</Button>
        <Button>LinkedIn</Button>
        <Button>Contact</Button>
      </div>

      <h2 style={{ marginTop: "40px" }}>Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <Card key={category}>
          <CardContent>
            <h3>{category}</h3>
            <ul>
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}

      <h2 style={{ marginTop: "40px" }}>Projects</h2>
      <Card>
        <CardContent>
          <h3>Geospatial History App</h3>
          <p>Visualisasi data spasial berbasis GIS</p>
        </CardContent>
      </Card>

      <footer style={{ marginTop: "40px", color: "gray" }}>
        © 2026 Akhmad Faisal Zein
      </footer>
    </div>
  );
}
