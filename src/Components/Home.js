import React from 'react'
import Searchbar from './Searchbar';
import SearchView from './SearchView';
import data from '../data.json'


export default function Home() {

    const restaurants = data.restaurants;
    const categories = data.categories;

    return (

        <div>

            {/* SearchBar */}
            <Searchbar />

            {/* Restaurants & Categories */}
            <SearchView
                restaurants={restaurants}
                categories={categories}
            />
            
        </div>
    )
}
