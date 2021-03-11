import React, { Component } from 'react';
import Country from './country';
import Button from '@material-ui/core/Button';

class Countries extends Component {
    constructor() {
        super();
        this.state = {
            countries: []
        }
    }
    componentDidMount() {
        this.getCountries();
    }

    getCountries() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => {
                this.setState({ countries: data });
            })
            .catch(error => console.log(error));
    }
    delete = name => {
        let newState = { ...this.state };
        newState.countries = newState.countries.filter(
            country => country.name !== name
        );
        this.setState(newState);
    }
    goBack = e => {
        e.preventDefault();
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <h1>Paises</h1>
                <Button
                    variant="contained"
                    onClick={this.goBack}>
                    Volver
                </Button>
                <ul>
                    {this.state.countries.map((country, index) => (
                        <Country key={index} name={country.name} onDelete={this.delete} />
                    ))}
                </ul>

            </div>
        );
    }
}
export default Countries;