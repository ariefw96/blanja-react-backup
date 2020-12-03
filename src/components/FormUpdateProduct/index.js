import React, { Component } from 'react';
import axios from 'axios'
const qs = require('querystring')

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export default class UpdtTbl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product_name: [],
            fetchSize: [],
            fetchColor: [],
            update_id: this.props.update_id,
            product_id: this.props.id_product,
            size_id: this.props.id_size,
            color_id: this.props.id_color,
            condition_id: this.props.id_condition,
            qty: this.props.qty,
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
            id:this.state.update_id,
            product_id: this.state.product_id,
            color_id: this.state.color_id,
            size_id: this.state.size_id,
            condition_id: this.state.condition_id,
            qty: this.state.qty
        }
        console.log(params)
        e.preventDefault()
        axios.patch(`http://localhost:8000/product/update`, qs.stringify(params), config)
        .then((result) => {
            console.log(result)
            alert(`Data berhasil di Update pada id : `+this.props.update_id)
            window.location.href=`http://localhost:3000/product/listStock`
        }).catch((error) => {
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
        console.log(this.props)
        console.log(this.state)
        return (
            <>
                <div className="card shadow mb4" style={{ width: "99%", height: "650px" }}>
                    <div className="card-body">
                        <h2>Update Data Product</h2>
                        <div className="dropdown-divider"></div>
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label>Pilih Product  </label><br></br>
                                <select className="form-control col-6" id="product_id" onChange={this.optCatcher}>
                                    {
                                        product_name && product_name.map(({ id, product_name }) => {
                                            if (id == this.props.id_product) {
                                                return (
                                                    <>
                                                        <option value={id} selected>{product_name}</option>
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        <option value={id}>{product_name}</option>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Pilih Ukuran  </label><br></br>
                                <select id="size_id" className="form-control col-6" onChange={this.optCatcher}>
                                    {
                                        fetchSize && fetchSize.map(({ id, size_name }) => {
                                            if (id == this.props.id_size) {
                                                return (
                                                    <>
                                                        <option value={id} selected>{size_name}</option>
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        <option value={id}>{size_name}</option>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Pilih Warna  </label><br></br>
                                <select id="color_id" className="form-control col-6" onChange={this.optCatcher}>
                                    <option value={this.props.id_color} selected hidden>{this.props.color}</option>
                                    {
                                        fetchColor && fetchColor.map(({ id, color_name }) => {
                                            if(id == this.props.id_color){
                                                return (
                                                    <>
                                                        <option value={id} selected>{color_name}</option>
                                                    </>
                                                )
                                            }else{
                                                return (
                                                    <>
                                                        <option value={id}>{color_name}</option>
                                                    </>
                                                )
                                            }


                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Pilih Kondisi  </label><br></br>
                                <select id="condition_id" className="form-control col-6" onChange={this.optCatcher}>
                                    <option value={this.props.id_condition} selected hidden>{this.props.condition}</option>
                                    <option value="1" >New</option>
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