import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/header';
import Dishes from './components/dishes';
import NewDish from './components/newDish';
import data from './assets/data/dishes.json';
import Button from '@material-ui/core/Button';

class App extends Component {
    state = {
        dish: "Tacos",
        dishes: data
    }

    showCountries = e => {
        e.preventDefault();
        this.props.history.push("/paises");
    }
    updateDish = (index, updatedname) => {
        let newState = { ...this.state };
        newState.dishes.dishes[index].name = updatedname;
        this.setState(newState);
    }
    addDish = (dishName) => {
        let newState = { ...this.state };
        const newDish = {
            id: newState.dishes.dishes.length,
            name: dishName,
            country: "Venezuela",
            ingredients: ["Harina de maíz", "Agua", "Sal", "Queso"]
        };
        newState.dishes.dishes.push(newDish);
        this.setState(newState);
    }
    render() {
        return (
            <div className="App">
                <Header />
                <Button
                    variant="contained"
                    onClick={this.showCountries}>
                    Países
                </Button>
                <NewDish onAddDish={this.addDish} />
                <Dishes data={this.state.dishes} onUpdateDish={this.updateDish} />

            </div>
        );
    }
}

export default App;
