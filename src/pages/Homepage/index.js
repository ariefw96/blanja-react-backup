import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Category from '../../components/Category';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import axios from 'axios'




class Home extends Component {
    state = {
        productsNew: [],
        productsPopular:[]
    }
    getNew = () => {
        const url = 'http://127.0.0.1:8000/products?sortBy=updated_at&orderBy=desc'
        axios.get(url)
            .then(({ data }) => {
                this.setState({
                    productsNew: data.data,
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    getPopular = () => {
        const url = 'http://127.0.0.1:8000/products?sortBy=rating&orderBy=desc'
        axios.get(url)
            .then(({ data }) => {
                this.setState({
                    productsPopular: data.data,
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    componentDidMount = () => {
        this.getNew()
        this.getPopular();
    }

    render() {
        const { productsNew,productsPopular } = this.state
        console.log(this.state)
        return (
            <div className="container">
                <Navbar />
                <br></br>
                <div className="container ml-2">
                    <Carousel />
                    <Category />
                    <h2>New</h2>
                    <p className="lead text-muted">You've never seen it before</p>
                    <div className="row">
                    {
                        productsNew && productsNew.map(({ product_id, product_name, category_name, product_price,rating, product_img }) => {
                            return (
                                <Card id={product_id} name={product_name} category={category_name} price={product_price} rating={rating} image={product_img} />
                            )
                        })
                    }
                    </div>
                    <br></br>
                    <h2>Popular</h2>
                    <p className="lead text-muted">Find clothes that are trending recently</p>
                    <div className="row">
                    {
                        productsPopular && productsPopular.map(({ product_id, product_name, category_name, product_price,rating, product_img }) => {
                            return (
                                <Card id={product_id} name={product_name} category={category_name} price={product_price} rating={rating} image={product_img}/>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;