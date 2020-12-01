import React, { Component } from 'react';
import axios from 'axios'
import Sidebar from '../../components/sidebar'


const urlParams = new URLSearchParams(window.location.search)

export default class DeleteProduct extends Component{


    DeleteData =() => {
        axios.delete(`http://localhost:8000/products/delete?`+urlParams)
        .then((result) => {
            // alert(`Data berhasil dihapus`)
            // window.history.go(-1)
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
                <p>Samlekom</p>
                {
                    alert(`data berhasil di hapus pada id ` +urlParams)
                }
            </>
        )
    }
}