import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import axios from 'axios'

const getUrl = 'http://127.0.0.1:8000/search?'
const urlParams = new URLSearchParams(window.location.search)

let title  = ''
let paramSearch = ''

console.log(typeof(urlParams))
console.log(urlParams)
if(urlParams.has('category')){
    title = 'Category '
}


if(urlParams.get('category') == '1'){
    title += 'T-shirt'
}else if(urlParams.get('category') == '2'){
    title += 'Short'
}else if(urlParams.get('category') == '3'){
    title += 'Jacket'
}else if(urlParams.get('category') == '4'){
    title += 'Pants'
}else if(urlParams.get('category') == '5'){
    title += 'Shoes'
}else{
    title += 'tidak ditemukan'
}


export default class SearchPage extends Component {
    state = {
        items: [],
    }

    getItemsCategory = () => {
        axios.get(getUrl + urlParams)
            .then(({ data }) => {
                this.setState({
                    items: data.data
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    componentDidMount = () => {
        this.getItemsCategory()
        console.log("didMount")
    }

    render() {
        console.log(this.state.items)
        console.log("render")
        const {items} = this.state
        return (
            <>
                <div className="container">
                    <Navbar />
                    <br></br>
                    <h2>{title}</h2>
                    <br></br>
                    <div className="row ml-2">
                        {
                            items && items.map(({ id, product_name, category_name, product_price }) => {
                                return (
                                    <Card id={id} name={product_name} category={category_name} price={product_price} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}