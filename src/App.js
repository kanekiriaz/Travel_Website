import React from "react";
import Contact from "./components/Contact";
import './App.css';
import Places from "./components/Places";
import TravelerGuide from "./components/TravelerGuide";
import PopularPlaces from "./components/PopularPlaces";
import Blogs from "./components/Blogs";


function App() {
  return (
    <div className="App">
      
      <Contact />
      <Places />
      <TravelerGuide />
      <h1>Popular Places Gallery</h1>
      <PopularPlaces />
      <Blogs />
    </div>
  );
}

export default App;
