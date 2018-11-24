import React, { Component } from 'react'

export default class CartHeader extends Component {
    render() {

        return (
            <div className="navContainer">
                <nav className="nav">
                    <h1 className="shoppingCart">Shopping Cart</h1>
                </nav>
            </div>
        )
    }
}