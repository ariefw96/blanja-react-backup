import React, { Component } from 'react'
// import { Button } from "react-bootstrap";
import "./product.css"
// import rating from '../../assets'
import rating from '../../assets/icons/rating-stars.png'
import Card from './../Card'
import axios from 'axios'
// import Counter from './Counter'
const token = 'x '+localStorage.getItem("token")
const base_url = "http://127.0.0.1:8000/"
const config = {
    headers: {
        'x-access-token' : token
    }
}


class Product extends Component {
    state = {
        colors: [],
        sizes: [],
        recommend: [],
        colorSelected: 0,
        sizeSelected: 0,
        count: 0,

    }


    clickColorHandler(clicked_id) {
        this.setState({
            colorSelected: clicked_id
        })
    }

    changeSizeHandler() {
        const id = document.getElementById("warna").value
        this.setState({
            sizeSelected: id
        })
    }

    getColor = () => {

        const { id } = this.props
        const url = base_url+ 'product/get_color/' + id
        axios.get(url,config)
            .then(({ data }) => {
                this.setState({
                    colors: data.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getRecommendation = () => {
        console.log(base_url+`products?category=` + this.props.cat_id)
        axios.get(base_url+`products?category=` + this.props.cat_id)
            .then(({ data }) => {
                // console.log(data)
                this.setState({
                    recommend: data.data.products
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    getSize = () => {
        const { id } = this.props
        const url = base_url + 'product/get_size/' + id
        axios.get(url,config)
            .then(({ data }) => {
                this.setState({
                    sizes: data.data,
                })
            }).catch((error) => {
                console.log(error)
            })
    }


    componentDidMount = () => {
        this.getColor()
        this.getSize()
        this.getRecommendation()
    }
    
    render() {


        const { id, name, category, desc, price, brand, image } = this.props
        const { colors, sizes, recommend } = this.state
        console.log(this.state)
        let btnMinus, btnPlus;
        if (this.state.count !== 0) {
            btnMinus =
                <button className="minus2 mr-2" onClick={() => this.setState({ count: this.state.count - 1 })}>
                    <p>-</p>
                </button>
        } else {
            btnMinus =
                <button className="minus2 mr-2" disabled>
                    <p>-</p>
                </button>
        }

        if (this.state.count !== 10) {
            btnPlus =
                <button className="minus2 mr-2" onClick={() => this.setState({ count: this.state.count + 1 })}>
                    <p>+</p>
                </button>
        } else {
            btnPlus =
                <button className="minus2 mr-2" disabled>
                    <p>+</p>
                </button>
        }

        return (
            <>
                <div id={id} className="row" >
                    <div className="col-5" style={{width:"560px", height:"560px"}}>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img className="img-fluid rounded" src={base_url+image.split(",")[0]} style={{width:"560px",height:"440px", backgroundSize:"cover",zIndex: "-1"}}alt="gambar" />
                        </div>
                        <div className="d-flex " style={{ height: "20%" }}>
                            <img className="img-fluid rounded mt-2" src={base_url+image.split(",")[0]} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                            <img className="img-fluid rounded mt-2" src={base_url+image.split(",")[1]} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                            <img className="img-fluid rounded mt-2" src={base_url+image.split(",")[2]} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                            <img className="img-fluid rounded mt-2" src={base_url+image.split(",")[3]} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                            <img className="img-fluid rounded mt-2" src={base_url+image.split(",")[4]} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                        </div>
                    </div>
                    <div className="col-7">
                        <div>
                            <p className="name">{name}</p>
                            <p className="">Category : {category}</p>
                            <div>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                {this.props.rating}
                            </div>
                            <br></br>
                            <h3>Price</h3>
                            <p className="price">Rp. {price}</p>
                            <p className="color">Color</p>
                        </div>
                        {
                            colors && colors.map(({ id, color_name }) => {
                                if (id == 1) {
                                    return (
                                        <>
                                            <button id={id} className="red mr-3" onClick={(e) => this.clickColorHandler(id)}></button>
                                        </>
                                    )
                                } else if (id == 2) {
                                    return (
                                        <>
                                            <button id={id} className="green mr-3" onClick={(e) => this.clickColorHandler(id)}></button>
                                        </>
                                    )
                                } else if (id == 3) {
                                    return (
                                        <>
                                            <button id={id} className="blue mr-3" onClick={(e) => this.clickColorHandler(id)}></button>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <button id={id} className="black mr-3" onClick={(e) => this.clickColorHandler(id)}></button>
                                        </>
                                    )
                                }
                            })
                        }
                        <div className="d-flex">
                            <p className="size mr-5 mt-3">Size</p>
                            <p className="jumlah mt-3">Jumlah</p>
                        </div>

                        <div className="d-flex">
                            <form>
                                <select id="warna" onChange={(e) => this.changeSizeHandler()}>
                                    <option disabled selected hidden>Pilih ukuran</option>
                                    {
                                        sizes && sizes.map(({ id, size_name }) => {
                                            return (
                                                <>
                                                    <option value={id} >{size_name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                            </form>
                            {btnMinus}
                            <p className="angka">{this.state.count}</p>
                            {btnPlus}
                        </div>
                        <div className="d-flex">
                            <button className="chat mt-3 rounded-pill">chat</button>
                            <button className="mybag ml-2 mt-3 rounded-pill">Add bag</button>
                            <button className="buy ml-2 mt-3 rounded-pill">Buy Now</button>
                        </div>

                    </div>
                </div>
                <h3 className="mt-3">Informasi Produk</h3>
                <div>
                    <p className="mt-3 text-dark">
                        <b>Condition</b>
                    </p>
                    <p className="mt-n3 text-danger">
                        <b>New</b>
                    </p>
                    <p className="mt-4 text-dark">
                        <b>Description</b>
                    </p>
                    <p className="desc" style={{ textAlign: 'justify' }}>{desc}</p>
                </div>
                <div>
                    <h2>You may also Like</h2>
                    <div className="row">
                        {
                            recommend && recommend.map(({ product_id, product_name, category_name, product_price, rating, product_img }) => {
                                return (
                                    <Card id={product_id} name={product_name} category={category_name} price={product_price} rating={rating} image={product_img} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Product;