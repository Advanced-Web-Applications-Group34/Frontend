import React from 'react'
import data from '../data.json'
import styles from '../Styles/restaurantsView.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function Restaurants() {

    const restaurants = data.restaurants;
    const categories = data.categories;

    // Display restaurants of each category
    const displayRestaurant = (categoryRestaurant, category, restaurant) => {
        if (category.name.toLowerCase() === categoryRestaurant.toLowerCase()) {
            return <div className={styles.elementPreview} key={restaurant.id} >
                <a href={`/restaurant/${restaurant.id}`}>
                    <img src={`/images/restaurants/${restaurant.image}`} alt={restaurant.name} />

                    <div className={styles.bottomElement}>

                        <h3>{restaurant.name}</h3>
                        <h4>{restaurant.categories.map(category => (
                            <span>{category}</span>
                        ))}</h4>

                        <div className={styles.informations}>
                            <div className={styles.deliveryPrice}>
                                <FontAwesomeIcon icon={faBiking} />
                                <p>€1.90</p>
                            </div>
                            <div className={styles.priceRange}>
                                <p>{restaurant.priceRange}</p>
                            </div>
                            <div className={styles.rate}>
                                <FontAwesomeIcon icon={faStar} />
                                <p>{restaurant.rate}/5</p>
                            </div>
                        </div>

                    </div>
                </a>

            </div>

        }
    }


    return (
        <div>



            <div className={styles.categoryView}>
                {categories.map(category => (

                    <div className={styles.category}>
                        <h3>{category.name}</h3>
                        <div className={styles.displayRestaurants}>
                            {restaurants.map(restaurant => (
                                restaurant.categories.map(categoryRestaurant => (

                                    displayRestaurant(categoryRestaurant, category, restaurant)
                                ))
                            ))}
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}
