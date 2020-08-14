import React, { Componeny } from 'React';

class ListItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.quantity}x {this.props.name}
            </li>
        );
    }
}

React.render(<GroceryList />, document.getElementById("root"));