import React from "react";
import styles from "../styles/Total.module.css";
// import { itemContext } from "../itemContext";
// import { useContext } from "react";
import { useValue } from "../itemContext";


function Navbar() {
  ////using context consumer custom hook useValue 
  const {total,item,handleReset,toggle} = useValue();
  
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles}>
        <button style={{marginRight:"1rem"}} onClick={toggle }>Cart</button>
        <button onClick={()=>handleReset()}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
