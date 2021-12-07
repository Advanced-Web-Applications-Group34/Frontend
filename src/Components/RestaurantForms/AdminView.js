import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Styles/RestaurantForms/AdminView.module.css';
import {useForm} from 'react-hook-form';

export default function AdminView() {

    const [newItemName, setNewItemName] = useState("");
    const [newItemCategory, setNewItemCategory] = useState({
        value: 'Burger'
    });
    const [newItemDescription, setNewItemDescription] = useState("")
    const [newItemPrice, setNewItemPrice] = useState("");
    const [newItemImage, setNewItemImage] = useState("")
    const [allItem, setAllItem] = useState([]);

    const addNewItem = () => {
        const newItem = 
        {
            id: Date.now(),
            name: newItemName, 
            category: newItemCategory,
            description: newItemDescription,
            price:newItemPrice,
            image: newItemImage,
        };

        setAllItem([...allItem, newItem]);
    }


    const register = useForm ();

    const onDeleteItemClick = (itemId) => {
        setAllItem(prevState => prevState.filter(({ id }) => id !== itemId));
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <label className={styles.label}>Let's create your menu !</label>
                <br></br>
                <div>Category
                    <select className={styles.resType} value={newItemCategory} onChange={(e) => setNewItemCategory(e.target.value)}>
                        <option value="Burger">Buffet</option>
                        <option value="Sushi">Fast-food</option>
                        <option value="Pizza">Fast-casual</option>
                        <option value="Mexican">Casual dining</option>
                        <option value="Kebap">Fine dining</option>
                        <option value="Asian">Fine dining</option>
                        <option value="Finnish">Fine dining</option>
                    </select>

                </div>
                <div>
                    Name: <input type="text" 
                                value={newItemName}
                                onChange={ (e) => setNewItemName(e.target.value) } />
                </div>
                <div>
                    Description: <input type="text" 
                                        value={newItemDescription}
                                        onChange={ (e) => setNewItemDescription(e.target.value) } />
                </div>
                <div>
                    Price: € <input type="text" 
                                value={newItemPrice} 
                                onChange={ (e) => setNewItemPrice(e.target.value) } />
                </div>
                <div>
                    Choose file: <input ref ={register}
                                        type ='file' 
                                        name ='picture'
                                        value ={newItemImage}
                                        onChange={ (e) => setNewItemImage(e.target.value) } />
                </div>
                <button className ={styles.addingBtn} onClick={ addNewItem }>Add Item</button>
            </div>

            <div className={styles.listWrapper}>
                <h2>List of items</h2>
                {allItem.map(curElem => (
                    <div className ={styles.itemList}>
                        <button className ={styles.deleteBtn} onClick={() => onDeleteItemClick(curElem.id)}>X</button>
                        <p>{curElem.category.value} - </p>
                        <p>{curElem.name} {curElem.name ? "- " : ""}</p>
                        <p>{curElem.description} {curElem.description ? "- " : ""}</p>
                        <p>{curElem.price} {curElem.price ? "- " : ""}</p>
                        <p>{curElem.image}</p>
                    </div>
                ))}
            </div>

            <div>
            <Link to="./Menu">
                <button className={styles.disableBtn}>Disable Admin Mode</button>
            </Link>
            </div>

        </div>
    )
}