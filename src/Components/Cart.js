import React from 'react'
import styles from '../Styles/cart.module.css';
import { useCart } from 'react-use-cart';


export default function Cart() {

    const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

    return (
        <div>

            {console.warn(items)}

            <div className={styles.formWrapper}>

                <ul className={styles.deliveryChoice}>
                    <li>Delivery</li> 
                    <li>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={styles.slider}></span>
                        </label>
                    </li>
                    <li>Pick-up</li>
                </ul>

                <h2>Your cart</h2>
                {isEmpty ? <h3>Your cart is empty</h3> : ""}

                <div>
                    {items.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td>
                                    {item.price} €
                                </td>
                                <td>
                                    Quantity {item.quantity}
                                </td>
                                <td>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    <button onClick={() => removeItem(item.id)}>Remove item</button>
                                </td>
                            </tr>
                        )
                    })}
                </div>

                <div className={styles.priceContainer}>
                    <div className={styles.price}>
                        <p>Subtotal :</p>
                        <p>0€</p>
                    </div>
                    <div className={styles.price}>
                        <p>Total :</p>
                        <p>{cartTotal}€</p>
                    </div>
                </div>

                <form className="form-action">
                    <button className={styles.button} type="submit">Go to checkout</button>
                </form>

            </div>
            
        </div>
    )
}
