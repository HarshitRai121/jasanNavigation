// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MapComponent from "./components/MapComponent";
import LiveLocation from "./components/LiveLocation";
import Landing from "./pages/Landing";
import SelectLocation from "./pages/SelectLocation";
import MapView from "./components/MapView"; // Import the MapView component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/select" element={<SelectLocation />} />
        <Route
          path="/map"
          element={
            <div className="App h-screen w-screen overflow-scroll">
              <MapComponent />
            </div>
          }
        />
        <Route
          path="/live"
          element={
            <div className="App h-screen w-screen overflow-scroll">
              <LiveLocation />
            </div>
          }
        />
        <Route
          path="/map-view" // New route for MapView
          element={
            <div className="App h-screen w-screen overflow-scroll">
              <MapView /> {/* Use the MapView component here */}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
