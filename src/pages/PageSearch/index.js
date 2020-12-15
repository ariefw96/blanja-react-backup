import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import axios from 'axios'

const getUrl = 'http://127.0.0.1:8000/products?'
const urlParams = new URLSearchParams(window.location.search)

let title  = ''

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
    title += ''
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

    componentDidUpdate = (prevProps) => {
        if(this.props.match !== prevProps.match){
            this.getItemsCategory(this.props.match)
            console.log("didUpdate")
        }
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
                            items && items.map(({ product_id, product_name, category_name, product_price, product_img }) => {
                                return (
                                    <Card id={product_id} name={product_name} category={category_name} price={product_price} image={product_img} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}