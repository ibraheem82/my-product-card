// 
import React from "react";
import "./App.css";

import Name from "./components/Name.jsx";
import Price from "./components/Price.jsx";
import Description from "./components/Description.jsx";
import Image from "./components/Image.jsx";

function App() {
  const firstName = "Astro";  // use your preferred name, or "" if none

  return (
    <div className="container mt-5" style={{ textAlign: "center" }}>
      <div
        className="card"
        style={{
          width: "25rem",
          margin: "auto",
          padding: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <Image />
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>

      <div className="mt-4">
        {firstName ? (
          <>
            <h2>Hello, {firstName}!</h2>
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="waving hand"
              width="80"
            />
          </>
        ) : (
          <h2>Hello, there!</h2>
        )}
      </div>
    </div>
  );
}

export default App;
