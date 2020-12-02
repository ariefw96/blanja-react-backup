import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar_seller from '../../components/navbar_seller';
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

    deleteData = (e) => {
        window.location.href=`http://localhost:3000/product/delete/`+e
    }

    componentDidMount = () => {
        this.getAllProduct()
    }


    render() {

        const { dataupdate } = this.state

        return (
            <>
                <div className="container">
                    <Navbar_seller />
                    <br></br>
                    <div className="row">
                        <div className="col-2"><Sidebar /></div>
                        <div className="col-10">
                            <div className="card shadow mb4" style={{ width: "99%", height: "100%" }}>
                                <div className="card-body">
                                    <h2>List of Products</h2>
                                    <div className="dropdown-divider"></div>
                                    <table id="dt1" className="table table-bordered table-hover">
                                        <thead className="table-info">
                                            <tr>
                                                <th>Id</th>
                                                <th>Product Name</th>
                                                <th>Color</th>
                                                <th>Size</th>
                                                <th>Qty</th>
                                                <th colSpan='2'>Action</th>
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
                                                            <td>
                                                                <Link to={{
                                                                    pathname: `./update/` + id,
                                                                    state: this.state
                                                                }}
                                                                ><i class="fas fa-edit"></i></Link>
                                                            </td>
                                                            <td>
                                                                <Link id={id} 
                                                                 style={{ color: "red" }} onClick={() => {if(window.confirm('Are you sure to delete this record?')){this.deleteData(id)}}}
                                                                ><i class="fas fa-trash-alt"></i></Link>
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
                    </div>
                </div>
            </>
        )
    }
}