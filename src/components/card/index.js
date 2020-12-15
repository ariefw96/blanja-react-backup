import React, { Component } from 'react';
import './card.css'
import '../../pages/style.css'
import product from "../../assets/product/gez-xavier.png"
import rating from "../../assets/icons/rating-stars.png"
import { Link } from 'react-router-dom'

const base_url_api = 'http://127.0.0.1:8000/'

class Card extends Component {
    render() {
        const { id, name, category ,price, image } = this.props
        console.log(this.props)
        console.log(image.split(","))
        return (
            <>
                <Link to={{
                    pathname: `/product/${id}`,
                    state: this.state
                }}>
                    <div className="card">
                        <img src={base_url_api+image.split(',')[0]} alt="Suit" style={{maxHeight: "50%"}} className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title" style={{height:"30px"}}>{name}</h5>
                            <h5 className="price-txt">Rp. {price}</h5>
                            <p className="text-muted">{category}</p>
                            <a><img className="img-fluid" src={rating} alt="Rating" />{this.props.rating}</a>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default Card