
 import { useValue } from "../itemContext";
import styles from "../styles/CartModal.module.css";
function CartModal({toggle}){
    const {handleReset,cart : cartItems} = useValue();

    return (<>
    
    <div className={styles.cartModal}>
    <div className={styles.closeButton} onClick={toggle}>
        Close
    </div>
    <div className={styles.clearButton} onClick={handleReset}>
        Clear
    </div>
    <div className={styles.itemContainer}>
        {cartItems.map((item)=>{
            return (
                
                <div className={styles.cartCard} key={item.id}>
                    <div className={styles.itemName}>{item.name}</div>
                    <div className={styles.itemQty}> X{item.qty}</div>
                    <div className={styles.itemPrice}>X {item.price * item.qty}</div>
                </div>
            )
        })}
    </div>

    <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>&#x20B9; {cartItems.reduce((acc,curr)=>acc+curr.price * curr.qty,0)}</div>
    </div>

   
    </div>
    
    </>)
}

export default CartModal;