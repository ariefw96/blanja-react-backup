import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Sidebar extends Component {
    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to={{
                            pathname: `./PostProduct`,
                            state: this.state
                        }}>Tambah Barang Baru</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: `./addStock`,
                            state: this.state
                        }}>Tambah Stock Produk</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: `./updateStock`,
                            state: this.state
                        }}>Update Product</Link>
                    </li>
                </ul>
            </>
        )
    }
}