import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './../../components/navbar'
import Sidebar from './../../components/sidebar'



export default class UpdateProduct extends Component {

    state = {
        dataupdate: [],
    }


    getAllProduct = () => {
        axios.get(`http://127.0.0.1:8000/products?sortBy=id&orderBy=asc`)
            .then(({ data }) => {
                this.setState({
                    dataupdate: data.data
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    componentDidMount = () => {
        this.getAllProduct()
    }


    render() {

        const { dataupdate } = this.state
        return (
            <>
                <div className="container">
                    <Navbar />
                    <br></br>
                    <center><h2>Halaman Stock Data Produk</h2></center>
                    <div className="row">
                        <div className="col-2"><Sidebar /></div>
                        <div className="col-10">
                            <table className="table table-bordered table-hover">
                                <thead className="table-info">
                                    <tr>
                                        <td>Id</td>
                                        <td>Product Name</td>
                                        <td>Color</td>
                                        <td>Size</td>
                                        <td>Qty</td>
                                        <td>Created</td>
                                        <td>Last Update</td>
                                        <td colSpan='2'>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        dataupdate && dataupdate.map(({ id, product_name, color_name, size_name, qty, created_at, updated_at }, index) => {
                                            return <>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{product_name}</td>
                                                    <td>{color_name}</td>
                                                    <td>{size_name}</td>
                                                    <td>{qty}</td>
                                                    <td>{created_at}</td>
                                                    <td>{updated_at}</td>
                                                    <td>
                                                        <Link to={{
                                                            pathname: `./tbUpdate?id=` + id,
                                                            state: this.state
                                                        }}
                                                            target="_blank"
                                                        >Edit</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={{
                                                            pathname: `./../products/delete?id=` + id,
                                                            state: this.state
                                                        }}
                                                            target="_blank" style={{color: "red"}}
                                                        >Hapus</Link>
                                                    </td>
                                                </tr>
                                            </>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}