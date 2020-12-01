import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import PostProduct from '../../components/PostProduct'
import Sidebar from '../../components/sidebar'

export default class post extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <br></br>
                <center><h2>Form Tambah Produk</h2></center>
                <br></br>
                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10">
                        <PostProduct />
                    </div>
                </div>
            </div>
        );
    }
}
