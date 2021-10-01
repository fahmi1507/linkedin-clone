import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* header */}

      {/* app body */}
      <div className="app__body">
        <Sidebar />
      </div>

      {/* sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
