import React, { Component } from 'react';
import logo from './../../assets/icons/Vector.png';

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="shadow sticky-top ">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="index.html" className="navbar-brand ml-5">
              <img src={logo} className="d-inline-block align-center" loading="lazy" alt="logo" /> Blanja
                        </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggled" aria-controls="navbarToggled" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggled">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <div className="input-group" style={{ width: "550px" }}>
                    {/* process with media-query */}
                    <input type="text" className="form-control border-right-0" style={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px" }} placeholder="Search here..." />
                    <span className="input-group-append">
                      <div className="input-group-text bg-transparent border-left-0" style={{ borderTopRightRadius: "25px", borderBottomRightRadius: "25px" }}>
                        <button type="submit"><i className="fas fa-search"></i></button>
                      </div>
                    </span>
                  </div>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-secondary ml-2" data-toggle="modal" data-target="#FilterModal"><i className="fal fa-filter" ></i></button>
                </li>
                <li className="nav-item">
                  <button className="btn ml-2">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </li>
              </ul>
              <div className="nav-item ml-auto">
                <button className="btn btn-danger btn-login mr-2 rounded-pill">Login</button>
                <button className="btn btn-outline-secondary btn-signup rounded-pill mr-5">Signup</button>
              </div>
            </div>
          </nav>
        </div>
        {/* Modal */}
        <div className="modal fade" id="FilterModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FilterModalLabel">Filter</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <strong>Colors</strong><br></br>
                <input type="radio" /> Red
                                <input type="radio" /> Green
                                <input type="radio" /> Blue
                                <input type="radio" /> BlacK
                                <div className="dropdown-divider"></div>
                <strong>Sizes</strong><br></br>
                <button className="btn btn-outline-secondary ml-2">XS</button>
                <button className="btn btn-danger ml-2">S</button>
                <button className="btn btn-danger ml-2">M</button>
                <button className="btn btn-outline-secondary ml-2">L</button>
                <button className="btn btn-outline-secondary ml-2">XL</button>
                <div className="dropdown-divider"></div>
                <strong>Category</strong><br></br>
                <button className="btn btn-outline-secondary ml-2">T-shirt</button>
                <button className="btn btn-outline-secondary ml-2">Short</button>
                <button className="btn btn-outline-secondary ml-2">Jacket</button>
                <button className="btn btn-outline-secondary ml-2">Pants</button>
                <button className="btn btn-outline-secondary ml-2">Shoes</button>
                <div className="dropdown-divider"></div>
                <strong>Brand</strong>
                <select className="text-muted" style={{ border: "none" }}>
                  <option disabled selected hidden>Zalora, Adidas, MiHoYo and many More</option>
                  <option>Zalora Cloth</option>
                  <option>Adidas</option>
                  <option>MiHoYo</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary rounded-pill mr-1" style={{ width: "200px" }} data-dismiss="modal">Discard</button>
                <button type="button" className="btn btn-danger rounded-pill ml-auto ml-1" style={{ width: "200px" }}>Apply</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
      </>

    )
  }
}

export default Navbar;