import React, { Component } from 'react'
import axios from 'axios';
import Productname from '../../components/Product_detail/product';
import Navbar from '../../components/Navbar'

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

    componentDidUpdate = (prevProps) => {
        if(this.props.match !== prevProps.match){
            this.getSingleProduct(this.props.match)
        }
    }


    render() {
        const { product } = this.state
        console.log(product)
        return (
            <>
                {
                    product && product.map(({ product_id, product_name, category_id, category_name,product_price, product_desc ,rating, product_img}) => {
                        return (
                            <div className="container">
                                <Navbar />
                                <br></br>
                                <div className="ml-1">
                                    <Productname id={product_id} name={product_name} cat_id={category_id} category={category_name} price={product_price} desc={product_desc} rating={rating} image={product_img} />
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