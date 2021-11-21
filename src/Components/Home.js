import React from 'react'
import Searchbar from './Searchbar';
import Restaurants from './Restaurants';


export default function Home() {
    return (
        <div>

            {/* SearchBar */}
            <Searchbar />

            {/* Restaurants */}
            <Restaurants />
            
        </div>
    )
}
