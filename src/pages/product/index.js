import React, { Component } from 'react'
import axios from 'axios';
import Productname from '../../components/product/product';
import Navbar from '../../components/navbar'

const getUrl = "http://localhost:8000/product/";

class Product extends Component {
    state = {
        product: [],
    }

    getSingleProduct = () => {
        const { match } = this.props;
        const url = getUrl + match.params.id
        axios
            .get(url)
            .then(({ data }) => {
                this.setState({
                    product: data,
                })
            })
            .catch((err) => {
                console.log(err)
            });
    }

    componentDidMount = () => {
        this.getSingleProduct();
    }

    render() {
        const { product } = this.state
        console.log(product)
        return (
            <>
                {
                    product && product.map(({ id, product_name, category_name, product_desc }) => {
                        return (
                            <div className="container">
                                <Navbar />
                                <br></br>
                                <div className="ml-1">
                                    <Productname id={id} name={product_name} category={category_name} desc={product_desc} />
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

/* <Productname name={this.state.product.product_name} brand={this.state.product.category_id} desc={this.state.product.product_descr} price={this.state.product.product_price}/> */

export default Product;