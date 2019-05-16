import React from 'react';
import './App.css';
import Header from "./Header"
import Infocard from "./Infocard"
import Holding from "./Holding"
import Navigation from "./Navigation"

function App() {
  
  return (
    <div>
      <Header />
      <Infocard />
      <Holding />
      {/* <Navigation /> */}
    </div>
  );
}

export default App;
