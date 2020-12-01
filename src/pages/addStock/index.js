import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import AddStock from '../../components/addStock'
import Sidebar from '../../components/sidebar'


export default class Add_Stock extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
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
