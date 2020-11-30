import React, { Component } from 'react'
import './card.css'
import '../../pages/style.css'
import product from "../../assets/product/gez-xavier.png"
import rating from "../../assets/icons/rating-stars.png"
import { Link } from 'react-router-dom'

class Card extends Component {
    render() {
        const { id, name, category ,price } = this.props
        console.log(this.props)
        return (
            <>
                <Link to={{
                    pathname: `/product/${id}`,
                    state: this.state
                }}>
                    <div className="card">
                        <img src={product} alt="Suit" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title" style={{height:"30px"}}>{name}</h5>
                            <h5 className="price-txt">Rp. {price}</h5>
                            <p className="text-muted">{category}</p>
                            <img className="img-fluid" src={rating} alt="Rating" />
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default Card