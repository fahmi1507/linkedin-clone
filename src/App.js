import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />
      {/* header */}

      {/* app body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

      {/* sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
