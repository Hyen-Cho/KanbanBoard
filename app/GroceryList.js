import React, { Component } from 'react';
import {render} from 'react-dom';

class GroceryList extends React.Component {
    render() {
        return (
            <ul>
                <ListItem quantity="1">Bread</ListItem>
                <ListItem quantity="6">Eggs</ListItem>
                <ListItem quantity="2">Milk</ListItem>
            </ul>
        );
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.quantity} x {this.props.children}
            </li>
        );
    }
}

render(<GroceryList />, document.getElementById("root"));