import React from 'react'
import styles from '../Styles/homePageElements.module.css'

export default function SearchView(props) {

    const restaurants = props.restaurants;
    const categories = props.categories;

    return (
        <div>
            
            <div className={styles.container}>

                <h2>Restaurants</h2>

                <div className={styles.elementsGrid}>
                    {restaurants.map(restaurant => (
                        <div className="restaurant-preview" key={restaurant.id} >
                            <img src={`/images/restaurants/${restaurant.image}`} alt={restaurant.name} />
                            <h3>{restaurant.name}</h3>
                            <h4>{restaurant.categories.map(category => (
                                <span>{category}</span>
                            ))}</h4>
                        </div>
                    ))}
                </div>

                <h2>Categories</h2>

                {categories.map(category => (
                    <div className="category-preview" key={category.id} >
                        <img src={`/images/restaurants/${category.image}`} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                ))}


            </div>
            
        </div>
    )
}
