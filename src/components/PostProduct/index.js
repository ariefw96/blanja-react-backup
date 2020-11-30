import React, { Component } from 'react'
import Navbar from '../navbar';
import axios from 'axios'
import { Form, Button } from "react-bootstrap"
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
        }
    }
    

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8000/product/add-product', qs.stringify(this.state), config)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { product_name, category_id, product_price, product_desc, product_img } = this.state
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name='product_name' value={product_name} onChange={this.changeHandler} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>category</Form.Label>
                        <Form.Control type="text" name='category_id' value={category_id} onChange={this.changeHandler} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>price</Form.Label>
                        <Form.Control type="text" name='product_price' value={product_price} onChange={this.changeHandler} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>desc</Form.Label>
                        <Form.Control type="text" name='product_desc' value={product_desc} onChange={this.changeHandler} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>image</Form.Label>
                        <Form.Control type="text" name='product_img' value={product_img} onChange={this.changeHandler} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }

}