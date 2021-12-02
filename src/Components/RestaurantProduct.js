import React from 'react'
import { useParams } from "react-router-dom";
import styles from '../Styles/restaurantProducts.module.css'
import data from '../data.json'



export default function RestaurantProduct() {
    
    const { id } = useParams();
    const categories = data.products

    const restaurant = () => {
        let restaurantFound = {};
        data.restaurants.map(restaurant => (
            restaurant.id == id ? restaurantFound = restaurant : ""
        ))
        console.log(restaurantFound);
        return restaurantFound
    }

    const findCategories = () => {
        const restaurantProductsCategories = [];
        categories.map(category => (
            category.id_restaurant == id ? restaurantProductsCategories.push(category) : ""
        ))
        return restaurantProductsCategories
    }

    return (
        <div className={styles.container}>

            <h1>{restaurant().name}</h1>

            {findCategories().map(category => (
                <div>
                    <h2>{category.category_name}</h2>
                    
                    <ul>
                        {category.products.map(product => (
                            <li>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    )
}
