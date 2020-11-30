import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import PostProduct from '../../components/PostProduct'

export default class post extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-2">SideBar</div>
                    <div className="col-10">
                        <PostProduct />
                    </div>
                </div>
            </div>
        );
    }
}
