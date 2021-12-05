import React from 'react';
//import AdminView from './Components/RestaurantForms/AdminView';
import {Link} from 'react-router-dom';
import styles from '../../Styles/RestaurantForms/Menu.module.css';

class Menu extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            items: []
        }
    }

    addNewItem = (name, author, price) => {
        let newItems = [...this.state.items];
        newItems.push({
        id: newItems.length + 1,
        name: name,
        author: author,
        price: price
        });

        this.setState({
        items: newItems
        });
    }

    deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

    render(){

        return (
            <>
                {/* <div className={styles.products}>
                    <AdminView />
                </div> */}
                <div>
                <Link to='./AdminMode'>
                    <button onClick={ this.props.disableAdminMode }> Admin Mode</button>
                </Link>
                </div>
            </>
        )
    }
}

export default Menu;