
import Header from "./component/Header";
import Lists from "./component/Lists";
import Footer from "./component/Footer";
import Items from "./component/items";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Header />
      <Lists setFilter={setFilter} />
      <Items filter={filter} />
      <Footer />
    </>
  );
}

export default App;
