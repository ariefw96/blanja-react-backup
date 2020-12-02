import React, { Component } from 'react'
// import { Button } from "react-bootstrap";
import "./product.css"
// import rating from '../../assets'
import rating from '../../assets/icons/rating-stars.png'
import axios from 'axios'
// import Counter from './Counter'
const getSize = `http://127.0.0.1:8000/product/get_size/`
const getColor = `http://127.0.0.1:8000/product/get_color/`


class Product extends Component {
    state = {
        colors: [],
        sizes: [],
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
        const url = getColor + id
        axios.get(url)
            .then(({ data }) => {
                this.setState({
                    colors: data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getSize = () => {
        const { id } = this.props
        const url = getSize + id
        axios.get(url)
            .then(({ data }) => {
                this.setState({
                    sizes: data,
                })
            }).catch((error) => {
                console.log(error)
            })
    }


    componentDidMount = () => {
        this.getColor()
        this.getSize()
    }

    render() {


        const { id, name, category, desc, price, brand, image } = this.props
        const { colors, sizes } = this.state
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
                    <div className="col-5">
                        <div style={{width:"100%", height :"80%"}}>
                            <img className="img-fluid rounded" src={image} style={{ maxWidth: '450px', maxHeight:"360px" }} alt="gambar" />
                        </div>
                        <div className="d-flex " style={{height: "20%"}}>
                            <img className="img-fluid rounded mt-2" src={image} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                            <img className="img-fluid rounded mt-2" src={image} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                            <img className="img-fluid rounded mt-2" src={image} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                            <img className="img-fluid rounded mt-2" src={image} alt="img" style={{ width: "20%", margin: "1px" }}></img>
                            <img className="img-fluid rounded mt-2" src={image} alt="img" style={{ width: "20%", margin: "1px" }}></img>
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
                            <p className="price">{price}</p>
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
            </>
        )
    }
}

export default Product;