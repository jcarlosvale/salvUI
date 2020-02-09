import React from 'react'

    const Order = ({ orders }) => {
      return (
        <div>
          <center><h1>Orders List</h1></center>
          {orders.map((order) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{order.id} : {order.description}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{order.date}</h6>
                <p className="card-text">Total value: ${order.totalValue}</p>
                <p className="card-text">Client: {order.client.id} - {order.client.name}</p>
                {order.orderDetails.map((details) => {
                    return(
                            <li key={details.id}>Product: {details.product.description}
                              <ul>
                                <li key={details.id}>Price: ${details.product.price}</li>
                                <li key={details.id}>Quantity: {details.quantity}</li>
                                <li key={details.id}>Total: ${details.value}</li>
                             </ul>
                            </li>
                            
                          )
                })}
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Order