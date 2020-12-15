import React, { Component } from 'react'
import axios from 'axios';
import Productname from '../../components/Product_detail/product';
import Navbar from '../../components/Navbar'

const getUrl = process.env.REACT_APP_BASE_URL_API
const token = 'x '+localStorage.getItem("token")
const config = {
    headers: {
        'x-access-token' : token
    }
}

// console.log(process.env)
// console.log(process.env.REACT_APP_BASE_URL_API)
// console.log(token)
class Product extends Component {
    state = {
        product: [],
    }

    getSingleProduct = () => {
        const { match } = this.props;
        const url = getUrl +'product/'+ match.params.id
        axios
            .get(url,config)
            .then(({ data }) => {
                // console.log(data)
                this.setState({
                    product: data.data,
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
        // console.log(this.state)
        // console.log(localStorage.getItem("token"))
        return (
            <>
                {
                    product && product.map(({ product_id, product_name, category_id, category_name,product_price, product_desc ,rating, product_img}) => {
                        return (
                            <div className="container">
                                <Navbar />
                                <br></br>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-transparent">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Category</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">{category_name}</li>
                                    </ol>
                                </nav>
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