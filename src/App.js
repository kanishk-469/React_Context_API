import "./App.css";
// import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomItemContext from "./itemContext";

function App() {
  // const [total, setTotal] = useState(0);
  // const [item, setItem] = useState(0);
  return (
    // <itemContext.Provider value={{ item, setItem, total, setTotal }}>
    ///Custom Provider Component hai ye
    <CustomItemContext>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CustomItemContext>
  );
}
export default App;
