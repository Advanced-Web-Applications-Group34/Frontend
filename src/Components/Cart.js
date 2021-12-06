import React from 'react'
import styles from '../Styles/cart.module.css';

export default function Cart() {
    return (
        <div>

            <div className={styles.formWrapper}>

                <ul>
                    <li>Delivery</li> 
                    <li>
                        <label class={styles.switch}>
                            <input type="checkbox" />
                            <span class={styles.slider}></span>
                        </label>
                    </li>
                    <li>Pick-up</li> 
                </ul>

                <h2>Your cart</h2>
                <h3>Start adding items to your cart</h3>

                <div className={styles.priceContainer}>
                    <div className={styles.price}>
                        <p>Subtotal :</p>
                        <p>0€</p>
                    </div>
                    <div className={styles.price}>
                        <p>Total :</p>
                        <p>0€</p>
                    </div>
                </div>

                <form className="form-action">
                    <button className={styles.button} type="submit">Go to checkout</button>
                </form>

            </div>
            
        </div>
    )
}
