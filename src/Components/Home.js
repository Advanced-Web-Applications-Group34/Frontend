import React from 'react'
import Searchbar from './Searchbar';
import SearchView from './SearchView';
import data from '../data.json'
import { useState } from 'react';



export default function Home() {

    const restaurants = data.restaurants;
    const categories = data.categories;


    const [filteredData, setFilteredData] = useState([]);


    const onSearchFieldChange = (event) => {
        const searchWord = event.target.value;
        console.log(event.target.value);
        console.log("test");
        const newFilter = restaurants.filter((value) => {
            return value.name.includes(searchWord);
        })
        setFilteredData(newFilter);
        // setSearchString({ searchString: event.target.value });
    }

    return (

        <div>

            {/* SearchBar */}
            <Searchbar
                onSearchFieldChange={onSearchFieldChange} filteredData={filteredData}
            />

            {/* Restaurants & Categories */}
            <SearchView
                restaurants={filteredData}
                categories={categories}
            />
            
        </div>
    )
}
