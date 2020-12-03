import React, { Component } from 'react';
import Navbar_seller from '../../components/Navbar_seller';
import AddStock from '../../components/FormAddStock'
import Sidebar from '../../components/Sidebar'


export default class Add_Stock extends Component {
    render() {
        return (
            <div className="container" >
                <Navbar_seller />
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
