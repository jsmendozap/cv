import GoogleFontLoader from "react-google-font-loader";
import { useState } from "react";
import Public from "./layout/Public";
import "./styles/App.css";
import { langContext } from "./context/Lang";

function App() {
  const [lang, setLang] = useState("es");

  return (
    <div className="App">
      <GoogleFontLoader
        fonts={[
          {
            font: "Bree Serif",
            weights: [400, 700],
          },
          {
            font: "Inclusive Sans",
            weights: [400, 700],
          },
          {
            font: "Mukta",
            weights: [200],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <langContext.Provider value={{ lang, setLang }}>
        <Public />
      </langContext.Provider>
    </div>
  );
}

export default App;
