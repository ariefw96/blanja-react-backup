import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <img src='https://i.redd.it/mjm7ew59yty51.jpg' style={{ borderRadius: "50%", height: "55px", width: "55px" }} />
                    </div>
                    <div className="col-8">
                        <p style={{ fontSize: "12px" }} className="mt-1">Arief W.</p>
                        <Link to='#'><p style={{ fontSize: "10px" }}><i class="fas fa-pencil-alt pr-2"></i>Change profile</p></Link>
                    </div>
                </div>
                <div style={{ height: "100px" }} className="ml-2">
                    <p><i class="fas fa-home mr-4"></i>Store</p>

                    <div className="dropdown">
                        <a className="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-box mr-4"></i>Product</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <a href='http://localhost:3000/product/postProduct' className="dropdown-item">Tambah Barang Baru</a>
                            <a href='http://localhost:3000/product/addStock' className="dropdown-item">Tambah Stock Produk</a>
                            <a href='http://localhost:3000/product/listStock' className="dropdown-item">List Product</a>
                        </div>
                    </div>
                    <p><i className="fas fa-shopping-cart mr-4 mt-3"></i>Orders</p>
                </div>
            </div>
        )
    }
}