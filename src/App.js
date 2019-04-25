import React from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Card from "./components/card";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
