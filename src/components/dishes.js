import React, { Component } from 'react';
import Dish from './dish';
import { Button, GridList } from '@material-ui/core';

class Dishes extends Component {
    goBack = e => {
        e.preventDefault();
        this.props.history.push("/");
    }
    updateDish = (index, updatedname) => {
        this.props.onUpdateDish(index, updatedname);
    };
    render() {
        return (
            <div className="container">
                <GridList>
                    {this.props.data.dishes.map((dish, index) => (
                        <Dish
                            key={index}
                            name={dish.name}
                            ingredients={dish.ingredients}
                            index={index}
                            onUpdateDish={this.updateDish} />
                    ))}
                </GridList>
            </div>
        );
    }
}
export default Dishes;