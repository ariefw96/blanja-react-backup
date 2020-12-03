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
            fetchSize: [],
            fetchColor: [],
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

    getAllSize = () => {
        axios.get('http://localhost:8000/products/getSize')
            .then(({ data }) => {
                this.setState({
                    fetchSize: data.data
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    getAllColor = () => {
        axios.get('http://localhost:8000/products/getColor')
            .then(({ data }) => {
                this.setState({
                    fetchColor: data.data
                })
            }).catch((error) => {
                console.log(error)
            })
    }


    optCatcher = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        const params = {
            product_id: this.state.product_id,
            color_id: this.state.color_id,
            size_id: this.state.size_id,
            condition_id: this.state.condition_id,
            qty: this.state.qty
        }
        console.log(params)
        e.preventDefault()
        axios.post('http://localhost:8000/product/add-stock', qs.stringify(params), config)
            .then(response => {
                console.log(response)
                alert('Stock berhasil di tambah')
                window.location.href='http://localhost:3000/product/listStock'
            })
            .catch(error => {
                console.log(error)
            })
    }


    componentDidMount = () => {
        this.getAlldata()
        this.getAllSize()
        this.getAllColor()
    }

    render() {
        const { product_name, qty, fetchColor, fetchSize } = this.state
        console.log(this.state)
        return (
            <>
                <div className="card shadow mb4" style={{ width: "99%", height: "650px" }}>
                    <div className="card-body">
                        <h2>Add Product</h2>
                        <div className="dropdown-divider"></div>
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label>Pilih Product  </label><br></br>
                                <select className="form-control col-6" id="product_id" onChange={this.optCatcher}>
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
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Pilih Ukuran  </label><br></br>
                                <select id="size_id" className="form-control col-6" onChange={this.optCatcher}>
                                    <option selected disabled hidden>Pilih</option>
                                    {
                                        fetchSize && fetchSize.map(({ id, size_name }) => {
                                            return (
                                                <>
                                                    <option value={id}>{size_name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Pilih Warna  </label><br></br>
                                <select id="color_id" className="form-control col-6" onChange={this.optCatcher}>
                                    <option disabled selected hidden>Pilih warna:</option>
                                    {
                                        fetchColor && fetchColor.map(({ id, color_name }) => {
                                            return (
                                                <>
                                                    <option value={id}>{color_name}</option>
                                                </>
                                            )

                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Pilih Kondisi  </label><br></br>
                                <select id="condition_id" className="form-control col-6" onChange={this.optCatcher}>
                                    <option selected disabled hidden>Pilih</option>
                                    <option value="1">New</option>
                                    <option value="2">Second</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Jumlah  </label><br></br>
                                <input type="number" className="form-control col-3" name='qty' value={qty} onChange={this.changeHandler} /><br></br>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}