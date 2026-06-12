import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "./component/Header";


import Lists from "./component/Lists";
import Footer from "./component/Footer";
import Items from "./component/items";

function App() {
  

  return (
    <>
      <Header />
      <Lists />
      <Items />
      <Footer />
    </>
  );
}

export default App;
