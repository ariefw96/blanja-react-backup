import React, { Component } from 'react';
import axios from 'axios'
import Sidebar from '../../components/sidebar'
import TableUp from '../../components/tableUpdate'

const urlParams = new URLSearchParams(window.location.search)


export default class UpdateData extends Component {

    state = {
        updateDt : [],
    }

    getFecthData = () => {
        axios.get(`http://localhost:8000/product/tbUpdate?`+urlParams)
        .then(({data}) => {
            this.setState({
                updateDt = data
            })
        })
    }



    render(){
        const {updateDt} = this.state
        return (
            <>
            {
                updateDt && updateDt.map()
            }
            </>
        )
    }
}