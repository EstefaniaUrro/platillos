import React, { Component, Fragment } from 'react';
import { Card, CardContent, List, ListItem, ListSubheader, ListItemText, ListItemIcon, TextField, IconButton } from '@material-ui/core';
import ScatterPlot from '@material-ui/icons/ScatterPlot';
import Edit from '@material-ui/icons/Edit';


class Dish extends Component {
    state = {
        edit: false,
        name: this.props.name
    }

    edit = e => {
        this.setState({ edit: !this.state.edit });
    };
    handleChange = e => {
        let newState = { ...this.state };
        newState.name = e.currentTarget.value;
        this.setState(newState);
        this.props.onUpdateDish(this.props.index, newState.name);
    };
    componentDidUpdate() {
        //tomar los datos para enviarlos a api o a BD porque  se actualizan y se envian
        console.log('Componente actualizado')
    }

    render() {
        return (
            <Card className="card">
                <CardContent>
                    <List
                        component="nav"
                        subheader={
                            <ListSubheader component="div" className="titulo">
                                {this.state.edit ? (
                                    <TextField
                                        label="Platillo..."
                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                ) : (
                                        this.props.name
                                    )}
                                <IconButton size="medium" onClick={this.edit}>
                                    <Edit />
                                </IconButton>
                            </ListSubheader>
                        }
                    >
                        {this.props.ingredients.map((ingredient, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <ScatterPlot />
                                    <ListItemText inset primary={ingredient} className="lista" />
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        )
    }
}

export default Dish;