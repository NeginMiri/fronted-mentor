import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
<<<<<<< HEAD
import Header from "./component/Header";

import Footer from "./component/Footer";
import Lists from "./component/Lists";
=======
import Header from "./component/header";
import Footer from "./component/Footer";
import Lists from "./component/lists";
>>>>>>> 3dd1521e53abe418aa60a85f56655f1ab38eee24

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Lists />
      <Footer />
    </>
  );
}

export default App;
