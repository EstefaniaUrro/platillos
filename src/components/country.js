import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import '../styles/dish.css';

class Country extends Component {
    delete = name => {
        this.props.onDelete(name);
    };
    componentWillUnmount() {
        console.log('Componente desmontado');
    }
    render() {
        return (
            <li className="list">
                <IconButton size="small" onClick={this.edit} >
                    <Delete onClick={() => this.delete(this.props.name)} className="tash" />
                </IconButton>
                {this.props.name}
            </li>
        )
    }
}
export default Country;