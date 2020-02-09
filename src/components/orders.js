import React, {Component} from 'react';
import Order from './order';

class Orders extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            orders: []
        }
    }

    render() {
        return (
            <div>
                <Order orders={this.state.orders} />
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:8080/orders')
            .then(res => res.json())
            .then((data) => {
                this.setState({ orders: data.orders })
            })
            .catch(console.log)
    }
}

export default Orders;