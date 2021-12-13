import React from 'react'
import styles from '../Styles/checkout.module.css';
import { useCart } from 'react-use-cart';




export default function Checkout() {

    const { emptyCart } = useCart();

    const onSubmit = (event) => {
        event.preventDefault();
        emptyCart()
        alert("Successful payment")
    }
    
    return (
        <div>
            <div className={styles.formWrapper}>
                <h2>Checkout</h2>
                <div>
                    <input type="text" name="cardNumber" id="number" />
                    <form onSubmit={onSubmit}>
                        <input type="date" name="expirationDate" id="" min="today" />
                        <input type="text" name="CVV" id="CVV" maxLength="3" />
                        <button className={styles.button} type="submit">Pay now</button>
                    </form>
                </div>
            

            </div>
        </div>
    )
    }
