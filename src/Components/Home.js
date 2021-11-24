import React from 'react'
import Searchbar from './Searchbar';
import SearchView from './SearchView';
import data from '../data.json'



export default function Home() {

    const restaurants = data.restaurants;
    const categories = data.categories;


    // const [searchString, setSearchString] = useState('');


    // const onSearchFieldChange = (event) => {
    //     console.log(event.target.value);
    //     setSearchString({ searchString: event.target.value });
    // }

    return (

        <div>

            {/* SearchBar */}
            <Searchbar
                // onSearchFieldChange={onSearchFieldChange} searchString={searchString}
            />

            {/* Restaurants & Categories */}
            <SearchView
                restaurants={restaurants}
                categories={categories}
            />
            
        </div>
    )
}
