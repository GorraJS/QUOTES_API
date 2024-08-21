import { useState } from "react";
import "./App.css";

function App() {
  const [frase, setFrase] = useState("");

  const getWeb = () => {
    let url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFrase(data);
        console.log(frase);
      });
  };

  const Write = (e) => {
    e.preventDefault();
    getWeb();
  };

  return (
    <>
      <form>
        <h3>{frase.text}</h3>
        <button type="submit" onClick={Write}>
          [ Nueva Frase ]
        </button>
        <ol></ol>
      </form>
    </>
  );
}

export default App;
