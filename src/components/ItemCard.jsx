import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";
// import { useContext } from "react";
// import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";

function ItemCard({ name, price, id }) {
 
   ////using context consumer custom hook useValue 
  // const {item,setItem,total,setTotal} = useValue();

  const { handleAdd, handleRemove } = useValue();
  

  ///Take all logics and put inside Custom Provider Component insideitemContext.js file
  // const handleAdd = () => {
  //   setTotal(total + price);
  //   setItem(item + 1);
  // };

  // const handleRemove = () => {
  //   if(total <= 0)return;
  //   setTotal((preState)=> preState - price);
  //   setItem(item - 1);

  // };

  return (
    <div className={styles.itemCard} >
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(price,id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
