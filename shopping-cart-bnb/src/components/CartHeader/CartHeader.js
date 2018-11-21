import React, { Component } from 'react'

export default class CartHeader extends Component {
    render() {
        const headerStyle = {
            backgroundColor: 'teal'
        }

        return (
            <nav style={headerStyle} className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Shopping Cart</a>
            </nav>
        )
    }
}