import React, { Component } from 'react'
import axios from 'axios'
// import { Form, Button } from "react-bootstrap"
const qs = require('querystring')

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export default class PostProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product_name: '',
            category_id: '',
            product_price: '',
            product_desc: '',
            product_img: '',
            rating : Math.round((Math.random()*500))/100
        }
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    changeCategoryHandler() {
        const id = document.getElementById("category").value
        this.setState({
            category_id: id
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8000/product/add-product', qs.stringify(this.state), config)
            .then(response => {
                console.log(response)
                alert('Data sukses diInputkan')
                window.location.href='http://localhost:3000/product/addStock'
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { product_name, product_price, product_desc, product_img } = this.state
        console.log(this.state)
        return (
            <div className="card shadow mb4" style={{width: "99%", height: "650px"}}>
                <div className="card-body">
                    <h2>Add Product</h2>
                    <div className="dropdown-divider"></div>
                    <form onSubmit={this.submitHandler} autoComplete="off">
                        <div className="form-group">
                            <label>Nama Produk</label>
                            <input type="text" className="form-control" name='product_name' value={product_name} onChange={this.changeHandler} placeholder="Product name" />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select className="form-control" id="category" onChange={(e) => this.changeCategoryHandler()} >
                                <option disabled selected hidden>Select Category</option>
                                <option value="1">T-shirt</ option>
                                <option value="2">Shorts</ option>
                                <option value="3">Jackets</ option>
                                <option value="4">Pants</ option>
                                <option value="5">Shoes</ option>
                            </select>
                        </div>
                        <div className="form-group" controlId="formBasicText">
                            <label>Price</label>
                            <input type="number" className="form-control" name='product_price' value={product_price} onChange={this.changeHandler} placeholder="Price" />
                        </div>
                        <div className="form-group" controlId="formBasicText">
                            <label>Product Description</label>
                            <textarea type="text" className="form-control" name='product_desc' value={product_desc} onChange={this.changeHandler} placeholder="Description" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="text" className="form-control" name='product_img' value={product_img} onChange={this.changeHandler} placeholder="Link Picture" />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                    </button>
                    </form>
                </div>
            </div>
        )
    }

}