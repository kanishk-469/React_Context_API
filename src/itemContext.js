import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";

///All 3 steps of Context API in this file only, carriar of state
/// Readability , maintainability , easy to debug all are preserve

////Creating the Context API here only
const itemContext = createContext();

////Create Context Consumer Custom hook , for Consumption part here only
function useValue() {
  const value = useContext(itemContext);
  return value;
}

///Creating custom provider Component, to keep context provider into one place/ or in one file
function CustomItemContext(props) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  ///I can also write state changing/updating Logic here, now all the logics
  /// of state updating be in this file only, here manipulating the state also
  const handleAdd = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id); // if match found return index else -1
    if (index === -1) {
      setCart([...cart, { ...prod, qty: 1 }]);
      setTotal(total + prod.price);
    } else {
      cart[index].qty += 1;
      setCart(cart);
      setTotal(total + cart[index].price);
      console.log(cart);
    }

    // setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price, id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart[index].qty--;
      setItem(item - 1);
      setTotal(total - cart[index].price);
      if (cart[index].qty === 0) {
        cart.splice(index, 1);
      }
    }
    setCart(cart);
  };

  function handleReset() {
    console.log(0);
    setTotal(0);
    setItem(0);
    setCart([]);
  }

  function toggle() {
    console.log("inside toggle");
    setShowCart((prevState) => !prevState);
  }

  //   function handleCloseModal() {
  //     setShowCart((preState) => (preState = false));
  //   }

  return (
    <>
      {/* default provider */}
      <itemContext.Provider
        value={{
          total,
          item,
          handleAdd,
          handleRemove,
          handleReset,
          showCart,
          toggle,
          cart,
        }}
      >
        {showCart && <CartModal toggle={toggle} />}{" "}
        {/* Intentionally toggle has passed using props here  */}
        {props.children}
      </itemContext.Provider>
    </>
  );
}

export { itemContext, useValue };
export default CustomItemContext;
