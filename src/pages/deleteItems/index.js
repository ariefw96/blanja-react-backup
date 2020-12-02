import React, { Component } from 'react';
import axios from 'axios'
import Sidebar from '../../components/sidebar'


const urlParams = new URLSearchParams(window.location.search)

export default class DeleteProduct extends Component{


    DeleteData =() => {
        axios.delete(`http://localhost:8000/products/delete/`+this.props.match.params.id)
        .then((result) => {
            alert(`Data berhasil dihapus pada id : `+urlParams)
            window.location.href=`http://localhost:3000/product/listStock`
        }).catch((error) => {
            console.log(error)
        })
    }
    componentDidMount = () => {
        this.DeleteData()
    }


    render(){
        
        return(
            <>
            </>
        )
    }
}