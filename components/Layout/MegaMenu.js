import React, { Component, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Cart from "../Modal/Cart";
import Router, { withRouter } from "next/router";
import Cookies from "js-cookie";
import base from "../../api/base";
import { getCard } from "../../store/actions/actions";
import { useEffect } from "react";

const MegaMenu = ({ user, test }) => {
  let baseURL = "https://api.mareew.uz/";
  //         display: false,
  //         searchForm: false,
  //         collapsed: true,
  //         statusi: false
  const [collapsed, setCollapsed] = useState(true);
  const [searchForm, setSearchForm] = useState(false);
  const [display, setDisplay] = useState(false);
  const [statusi, setStatusi] = useState(false);
  const dispatch = useDispatch();

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  let telegramcode2 =
    typeof window !== "undefined"
      ? window.localStorage.getItem("access")
      : false;
  let telegramcode3 =
    typeof window !== "undefined"
      ? window.localStorage.getItem("refresh")
      : false;

  const glavni = () => {
    if (telegramcode2) {
      Router.push({
        pathname: `/`,
        query: { telegramcode: telegramcode3 },
      });
    } else {
      Router.push({
        pathname: `/`,
      });
    }
  };
  const glavni2 = () => {
    Router.push({
      pathname: `/account`,
    });
  };

  const account = () => {
    setStatusi(!statusi);
  };

  // let a = Cookies.get('cart')
  // useEffect(() => {
  //     dispatch(getCard())
  // }, [])

  return (
    <React.Fragment>
      <div className="navbar-area">
        <div id="navbar" className="comero-nav">
          <div className="container">
            <div className="py-3"></div>
            <nav className="navbar navbar-expand-md navbar-light justify-content-between">
              <div>
                <a className="navbar-brand">
                  <img
                    onClick={() => {
                      glavni();
                    }}
                    src={require("../../images/logo.png")}
                    alt="logo"
                    width="175"
                    height="30"
                  />
                </a>
              </div>

              {/* <button
                                
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button> */}

              <label htmlFor="search" className="blog_inp navbar_border_color">
                <div className="icon_inp">
                  <i className="fas fa-search navbar_text_color"></i>
                </div>
                <input
                  type="text"
                  placeholder="Qidiruv..."
                  id="search"
                  className="search_inp "
                />
              </label>

              <div className="others-option">
                <div className="option-item">
                  {telegramcode2 ? (
                    ""
                  ) : (
                    <Link href="/login">
                      <a className="navbar_text_color">Kirish</a>
                    </Link>
                  )}
                </div>
                <div className="option-item">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 40 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10L8.07843 2H32.3922L38.4706 10M2 10V38C2 39.0609 2.42694 40.0783 3.18689 40.8284C3.94684 41.5786 4.97755 42 6.05229 42H34.4183C35.493 42 36.5237 41.5786 37.2837 40.8284C38.0437 40.0783 38.4706 39.0609 38.4706 38V10M2 10H38.4706M28.3399 18C28.3399 20.1217 27.486 22.1566 25.9661 23.6569C24.4462 25.1571 22.3848 26 20.2353 26C18.0858 26 16.0244 25.1571 14.5045 23.6569C12.9846 22.1566 12.1307 20.1217 12.1307 18"
                      stroke="#FF0000"
                    />
                  </svg>
                </div>

                <div className="option-item">
                  <Link href="#">
                    <a
                      // onClick={(e) => {
                      //     e.preventDefault();
                      //     this.handleCart()
                      // }}
                      className="navbar_text_color"
                    >
                      <svg
                        width="25"
                        height="22"
                        viewBox="0 0 50 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44.3244 5.53629C43.2038 4.41518 41.8734 3.52584 40.409 2.91907C38.9446 2.3123 37.375 2 35.7899 2C34.2048 2 32.6352 2.3123 31.1708 2.91907C29.7064 3.52584 28.376 4.41518 27.2554 5.53629L24.9298 7.86189L22.6042 5.53629C20.3407 3.27279 17.2707 2.00117 14.0696 2.00117C10.8686 2.00117 7.79861 3.27279 5.53512 5.53629C3.27162 7.79979 2 10.8697 2 14.0708C2 17.2719 3.27162 20.3418 5.53512 22.6053L7.86072 24.9309L24.9298 42L41.9988 24.9309L44.3244 22.6053C45.4455 21.4848 46.3349 20.1543 46.9416 18.6899C47.5484 17.2255 47.8607 15.6559 47.8607 14.0708C47.8607 12.4857 47.5484 10.9161 46.9416 9.45174C46.3349 7.98736 45.4455 6.65687 44.3244 5.53629Z"
                          stroke="#FF0000"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="option-item">
                  {telegramcode2 ? (
                    <>
                      <div
                        className="d-flex align-items-center popap"
                        onClick={() => {
                          account();
                        }}
                      >
                        <img src={baseURL + user?.image} alt="" />
                        <h3>
                          {user?.first_name != null
                            ? user?.first_name
                            : "" + user?.last_name != null
                            ? user?.last_name
                            : ""}
                        </h3>
                      </div>
                      <div
                        className={`pop_up ${
                          statusi == true ? "d-block" : "d-none"
                        }`}
                      >
                        <div
                          className="h5"
                          onClick={() => {
                            glavni2();
                          }}
                        >
                          Profil
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* {this.state.display ? <Cart onClick={this.handleCart} /> : ''} */}
    </React.Fragment>
  );
};

export default MegaMenu;

// class MegaMenu extends Component {
//     state = {
//         display: false,
//         searchForm: false,
//         collapsed: true,
//         statusi: false
//     };

//     handleCart = () => {
//         this.setState(prevState => {
//             return {
//                 display: !prevState.display
//             };
//         });
//     }

//     handleSearchForm = () => {
//         this.setState(prevState => {
//             return {
//                 searchForm: !prevState.searchForm
//             };
//         });
//     }

//     toggleNavbar = () => {
//         this.setState({
//             collapsed: !this.state.collapsed,
//         });
//     }

//     componentDidMount() {
//         let elementId = document.getElementById("navbar");
//         document.addEventListener("scroll", () => {
//             if (window.scrollY > 170) {
//                 elementId.classList.add("is-sticky");
//             } else {
//                 elementId.classList.remove("is-sticky");
//             }
//         });
//         window.scrollTo(0, 0);
//     }
//     componentDidMount() {
//         base.get(`/customer/cart`).then((res)=>{
//             console.log(res);
//         })
//     }
//     render() {

//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         products: state.addedItems
//     }
// }

// export default connect(mapStateToProps)(MegaMenu)

// import React from 'react'
