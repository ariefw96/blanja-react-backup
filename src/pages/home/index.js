import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Category from '../../components/category';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import axios from 'axios'




class Home extends Component {
    state = {
        products: [],
    }
    getPopular = () => {
        const url = 'http://127.0.0.1:8000/products'
        axios.get(url)
            .then(({ data }) => {
                this.setState({
                    products: data.data,
                })
            }).catch((err) => {
                console.log(err)
            })
    }
    componentDidMount = () => {
        this.getPopular();
    }

    render() {
        const { products } = this.state
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
                        products && products.map(({ id, product_name, category_name, product_price }) => {
                            return (
                                <Card id={id} name={product_name} category={category_name} price={product_price} />
                            )
                        })
                    }
                    </div>
                    <br></br>
                    <h2>Popular</h2>
                    <p className="lead text-muted">Find clothes that are trending recently</p>
                    <div className="row">
                    {
                        products && products.map(({ id, product_name, category_name, product_price }) => {
                            return (
                                <Card id={id} name={product_name} category={category_name} price={product_price} />
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