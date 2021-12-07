import React from 'react';
import AdminView from './AdminView';
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

    addNewItem = (name, catergory, description, price, image) => {
        let newItems = [...this.state.items];
        newItems.push({
        id: newItems.length + 1,
        name: name,
        category: catergory,
        description: description,
        price: price,
        image: image,
        });

        this.setState({
        items: newItems
        });
    }

    deleteItem = itemId => this.setState({items: this.state.items.filter(curElem => curElem.id !== itemId)})

    render(){

        return (
            <>
                <div className={styles.products}>
                    <AdminView />
                </div>
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