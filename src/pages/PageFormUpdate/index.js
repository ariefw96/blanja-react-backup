import React, { Component } from 'react';
import axios from 'axios'
import Sidebar from '../../components/Sidebar'
import UpdtTbl from '../../components/FormUpdateProduct'
import Navbar_seller from '../../components/Navbar_seller'



export default class UpdateData extends Component {

    state = {
        updateDt : [],
    }

    getFecthData = () => {
        axios.get(`http://localhost:8000/product/tblUpdate/`+this.props.match.params.id)
       
        .then(({data}) => {
            this.setState({
                updateDt : data
            })
        })
    }

    componentDidMount = () => {
        this.getFecthData()
    }



    render(){
        const {updateDt} = this.state
        console.log(updateDt)
        return (
            <>
            <div className="container" >
                <Navbar_seller />
                <br></br>
                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10">
                        {
                            updateDt && updateDt.map(({id,product_id,product_name,color_id,color_name,size_id,size_name,condition_id,condition_name,qty}) => {
                                return(
                                    <>
                                        <UpdtTbl update_id={id} id_product={product_id} product_name={product_name} id_color={color_id} color={color_name} id_size={size_id} size={size_name} id_condition={condition_id} condition={condition_name} qty={qty}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </>
        )
    }
}