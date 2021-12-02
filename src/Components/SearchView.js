import React from 'react'
import styles from '../Styles/restaurantsView.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function SearchView(props) {

    const restaurants = props.restaurants;
    const categories = props.categories;

    return (
        <div>
            
            <div className={styles.container}>

                <h2>Restaurants</h2>


                <div className={styles.elementsGrid}>
                    {restaurants.map(restaurant => (
                        <div className={styles.elementPreview} key={restaurant.id} >
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
                    ))}
                </div>


                <h2>Categories</h2>

                <div className={styles.elementsGrid}>
                    {categories.map(category => (
                        <div className={styles.elementPreview} key={category.id} >
                            <img src={`/images/restaurants/${category.image}`} alt={category.name} />

                            <div className={styles.bottomElement}>
                                <h3>{category.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            
        </div>
    )
}
