import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import AddStock from '../../components/addStock'
import Sidebar from '../../components/sidebar'


export default class Add_Stock extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <br></br>
                <center><h2>Halaman Tambah stock Produk</h2></center>
                <br></br>
                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10">
                        <AddStock />
                    </div>
                </div>
            </div>
        );
    }
}
