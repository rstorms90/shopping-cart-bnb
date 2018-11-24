import React from 'react'
import Product from '../ProductList/Product'

export default class NewItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            quantity: 0,
            product: [
                { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
            ]
        }
    }

    onSubmit = (e) => {
        e.preventDefault()

        let myItem = {}
        for (let i = 0; i < this.state.product.length; i++) {
            if(this.state.name === this.state.product[i].name) {
                myItem = this.state.product[i]
                console.log(myItem)
            }
        }

        const { quantity } = this.state
        // console.log('submit:', name, quantity)
        const { newItem } = this.props
        newItem({ myItem, quantity })

        //reset form
        this.setState({
            name: '',
            quantity: ''
        })
    }

    onQuantityChange = (e) => {
        // console.log('addedItem:', e.target.value)
        e.preventDefault()
        this.setState({
            ...this.state,
            quantity: e.target.value
        })
    }

    onNameChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.stage,
            name: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label> Name: </label>
                <select id="product" onChange={this.onNameChange}>
                  {this.state.product.map((x, y) => <Product id={y} key={y} item={x} />)}
                </select>
                <br />
                <label> Quantity: </label>
                <input type="number" value={this.state.quantity} onChange={this.onQuantityChange} />
                <br />
                <input type="submit" className="submit" />
            </form>
        )
    }


}