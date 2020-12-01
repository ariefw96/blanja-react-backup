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
        sizeSelected: 0
        
    }

    clickColorHandler(clicked_id){
        this.setState({
            colorSelected: clicked_id
        })
    }

    changeSizeHandler(){
        const id = document.getElementById("warna").value
        this.setState({
            sizeSelected:id
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
        return (
            <>
                <div id={id} className="row" >
                    <div className="col-5">
                        <img className="img-fluid rounded" src={image} style={{width: '500px'}} alt="gambar" />
                        <div className="d-flex">
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
                            <p className="">{category}</p>
                            <img src={rating} className="mb-5" alt="..." />
                            <p className="price">{price}</p>
                            <p className="color">Color</p>
                        </div>
                        {
                            colors && colors.map(({ id, color_name }) => {
                                if (id == 1) {
                                    return (
                                        <>
                                            <button id={id} className="red mr-3"  onClick={(e) => this.clickColorHandler(id)}></button>
                                        </>
                                    )
                                }else if (id == 2) {
                                    return (
                                        <>
                                            <button id={id} className="green mr-3"  onClick={(e) => this.clickColorHandler(id)}></button>
                                        </>
                                    )
                                }else if (id == 3) {
                                    return (
                                        <>
                                            <button id={id} className="blue mr-3"  onClick={(e) => this.clickColorHandler(id)}></button>
                                        </>
                                    )
                                }else{
                                    return (
                                        <>
                                            <button id={id} className="black mr-3"  onClick={(e) => this.clickColorHandler(id)}></button>
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
                                        sizes && sizes.map(({id, size_name}) => {
                                            return(
                                                <>
                                                <option value={id} >{size_name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                            </form>
                            <button className="minus2 mr-2">
                                <p>-</p>
                            </button>
                            <p className="angka">1</p>
                            <button className="plus ml-2">
                                <p>+</p>
                            </button>
                        </div>
                        <div className="d-flex">
                            <button className="chat mt-3 rounded-pill">
                                chat
                </button>
                            <button className="mybag ml-2 mt-3 rounded-pill">
                                Add bag
                </button>
                            <button className="buy ml-2 mt-3 rounded-pill">
                                Buy Now
                </button>
                        </div>

                    </div>
                </div>
                <p className="desc">{desc}</p>

                <p className="brand">{brand}</p>
            </>
        )
    }
}

export default Product;