import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Styles/RestaurantForms/AdminView.module.css';

export default function AdminView() {

    const [newItemName, setNewItemName] = useState("");
    const [newItemCatergory, setNewItemCatergory] = useState({
        value: 'Burger'
    });
    const [newItemDescription, setNewItemDescription] = useState("")
    const [newItemPrice, setNewItemPrice] = useState("");
    const [newItemImage, setNewItemImage] = useState("")

    const [allItem, setAllItem] = useState ([]);

    const addNewItem = () => {
        const newItem = 
        {
            name: newItemName, 
            category: newItemCatergory,
            description: newItemDescription,
            price:newItemPrice,
            image: newItemImage,
        };
        setAllItem([...allItem, newItem]);
    }

    // const onDeleteItemClick = (itemId) => {
    //     console.log("clicked delete for item id " + itemId);
    //     props.deleteItem(itemId);
    // }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <label>Add new item</label>
                <div>Catergory
                    <select className={styles.resType} value={newItemCatergory} onChange={(e) => setNewItemCatergory(e.target.value)}>
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
                    Choose file: <input type ='image' 
                                        value ={newItemImage}
                                        onchange={ (e) => setNewItemImage(e.target.value) } />
                </div>
                <button className ={styles.addingBtn} onClick={ addNewItem }>Add Item</button>
            </div>

            <div>
                <h1>List of items</h1>
                { 
                    allItem.map((curElem) =>{
                        return (
                            <div>
                                <p>{curElem.newItemCatergory}</p>
                                <p>{curElem.newItemName}</p>
                                <p>{curElem.newItemDescription}</p>
                                <p>{curElem.newItemPrice}</p>
                                <p>{curElem.newItemImage}</p>
                                {/* <button onClick={() => onDeleteItemClick(item.id)}>X</button> {item.name}, {item.author}, {item.price} */}
                            </div>
                        )
                    })
                }
            </div>

            <div>
            <Link to="./Menu">
                <button className={styles.disableBtn}>Disable Admin Mode</button>
            </Link>
            </div>

        </div>
    )
}