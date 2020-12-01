import React, { Component } from 'react';
import axios from 'axios'
const qs = require('querystring')

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export default class AddStock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product_name: [],
            product_id: '',
            size_id: '',
            color_id: '',
            condition_id: '',
            qty: '',
        }
    }
    getAlldata = () => {
        axios.get(`http://127.0.0.1:8000/products/showAll`)
            .then(({ data }) => {
                this.setState({
                    product_name: data.data,
                })
            }).catch((err) => {
                console.log(err)
            })
    }


    ProductCatcher() {
        const id = document.getElementById("product").value
        this.setState({
            product_id: id,
        })
    }
    ColorCatcher() {
        const id = document.getElementById("color").value
        this.setState({
            color_id: id
        })
    }
    SizeCatcher() {
        const id = document.getElementById("size").value
        this.setState({
            size_id: id
        })
    }
    ConditionCatcher() {
        const id = document.getElementById("condition").value
        this.setState({
            condition_id: id
        })
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/product/add-stock', qs.stringify(this.state), config)
            .then(response => {
                console.log(response)
                alert('Data sukses diInputkan')
                // window.location.href='http://localhost:3000'
            })
            .catch(error => {
                console.log(error)
            })
    }


    componentDidMount = () => {
        this.getAlldata()
    }

    render() {
        const { product_name, qty } = this.state
        console.log(this.state)
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <label>Pilih Product : </label><br></br>
                    <select id="product" onChange={(e) => this.ProductCatcher()}>
                        <option selected disabled hidden>Pilih</option>
                        {
                            product_name && product_name.map(({ id, product_name }) => {
                                return (
                                    <>
                                        <option value={id}>{product_name}</option>
                                    </>
                                )
                            })
                        }
                    </select><br></br>
                    <label>Pilih Ukuran : </label><br></br>
                    <select id="size" onChange={(e) => this.SizeCatcher()}>
                        <option selected disabled hidden>Pilih</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                        <option value="4">28</option>
                        <option value="5">29</option>
                        <option value="6">30</option>
                        <option value="7">31</option>
                        <option value="8">32</option>
                        <option value="9">33</option>
                        <option value="10">34</option>
                    </select><br></br>
                    <label>Pilih Warna : </label><br></br>
                    <select id="color" onChange={(e) => this.ColorCatcher()}>
                        <option selected disabled hidden>Pilih</option>
                        <option value="1">Red</option>
                        <option value="2">Green</option>
                        <option value="3">Blue</option>
                        <option value="4">Black</option>
                    </select><br></br>
                    <label>Pilih Kondisi : </label><br></br>
                    <select id="condition" onChange={(e) => this.ConditionCatcher()}>
                        <option selected disabled hidden>Pilih</option>
                        <option value="1">New</option>
                        <option value="2">Second</option>
                    </select><br></br>
                    <label>Jumlah : </label><br></br>
                    <input type="text" name='qty' value={qty} onChange={this.changeHandler} /><br></br>
                    <button type="submit">Kirim</button>
                </form>
            </>
        )
    }
}