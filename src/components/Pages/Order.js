import React from 'react'
import '../styles/Order.css'

function Order() {
    return (
        <div className="order-container">
            <h3 className="order-header">Thank you</h3>
            <img className="order-img" src="./check.jpg" alt="tick" />
            <h3 className="order-header">Your Order has been received...</h3>
        </div>
    )
}

export default Order
