import React from 'react'
import styles from '../Styles/signInForm.css';

export default function Cart() {
    return (
        <div>

            <div className="form-wrapper">

                <ul>
                    <li>Delivery</li> 
                    <li>
                        <input type="checkbox" name="" id="" />
                        <span className={styles.slider}></span>
                    </li>
                    <li>Pick-up</li> 
                </ul>

                <h2>Your cart</h2>
                <h3>Start adding items to your cart</h3>

                <div>
                    <div>
                        <p>Subtotal :</p>
                        <p>0€</p>
                    </div>
                    <div>
                        <p>Total :</p>
                        <p>0€</p>
                    </div>
                </div>

                <form className="form-action">
                    <button className="btn" type="submit">Go to checkout</button>
                </form>

            </div>
            
        </div>
    )
}
