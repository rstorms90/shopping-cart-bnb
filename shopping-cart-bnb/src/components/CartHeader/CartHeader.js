import React, { Component } from 'react'

export default class CartHeader extends Component {
    render() {

        return (
            <div className="navContainer">
                <nav className="nav">
                    <a className="shoppingCart" href="/">Shopping Cart</a>
                </nav>
            </div>
        )
    }
}