import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { addQuantityWithNumber } from '../../store/actions/actions';
import SizeGuide from './SizeGuide';
import Shipping from './Shipping';
import { useRouter } from 'next/router';
import Axios from 'axios';


const ProductContent = ({ producti }) => {

    const [qty, setQty] = useState(1)
    const [max, setMax] = useState(10)
    const [min, setMin] = useState(1)
    const [sizeGuide, setSizeGuide] = useState(false)
    const [shipModal, setShipModal] = useState(false)


    const router = useRouter()
    const { id } = router.query

    const handleAddToCartFromView = () => {
        producti.addQuantityWithNumber(producti.id, qty);

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    const IncrementItem = () => {
        setQty(prevState => {
            if (prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    const DecreaseItem = () => {
        setQty(prevState => {
            if (prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    const openSizeGuide = () => {
        setSizeGuide({ sizeGuide: true });
    }

    const closeSizeGuide = () => {
        setSizeGuide({ sizeGuide: false });
    }

    const openShipModal = () => {
        setSizeGuide({ shipModal: true });
    }

    const closeShipModal = () => {
        setSizeGuide({ shipModal: false });
    }

 



    return (
        <>
            <div className="col-lg-6 col-md-6 md-mt-100 pb-5">
                <div className="product-details-content">
                    <h3>{producti?.name}</h3>

                    <div className="price">
                        <span className="new-price">{producti?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} so'm</span>
                    </div>

                    <div className="product-review">
                        {/* <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div> */}
                        {/* <Link href="#">
                            <a className="rating-count">3 reviews</a>
                        </Link> */}
                    </div>

                    <p>{producti?.description}</p>

                    <ul className="product-info">
                        <li><span>Brend:</span> <Link href="#"><a>{producti?.brand?.name}</a></Link></li>
                        <li><span>Turi:</span> <Link href="#"><a>{producti?.category?.name == true ? 'Yangi' : "Yaxshi"}</a></Link></li>
                        <li><span>Xolati:</span> <Link href="#"><a>{producti?.status_new == true ? 'Yangi' : "Yaxshi"}</a></Link></li>
                    </ul>

                    <div className="product-color-switch mb-3">
                        <h4>Rangi:</h4>

                        <ul>
                            {
                                producti?.colors.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href="#">
                                                <a title="Black" style={{ background: item }} className=""></a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>

                    {/* <div className="product-size-wrapper">
                        <h4>Size:</h4>

                        <ul>
                            <li>
                                <Link href="#">
                                    <a>XS</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="#">
                                    <a>S</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>M</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>XL</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>XXL</a>
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* <div className="product-info-btn">
                        <Link href="#">
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    openSizeGuide();
                                }}
                            >
                                <i className="fas fa-crop"></i> Size guide
                            </a>
                        </Link>
                        <Link href="#">
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    openShipModal();
                                }}
                            >
                                <i className="fas fa-truck"></i> Shipping
                            </a>
                        </Link>

                    </div> */}

                    <div className="product-add-to-cart d-flex">
                        <div className="input-counter">
                            <span
                                className="minus-btn"
                                onClick={DecreaseItem}
                            >
                                <i className="fas fa-minus"></i>
                            </span>
                            <input
                                type="text"
                                value={qty}
                                min={min}
                                max={max}
                                onChange={e => setQty({ qty: e.target.value })}
                            />
                            <span
                                className="plus-btn"
                                onClick={IncrementItem}
                            >
                                <i className="fas fa-plus"></i>
                            </span>
                        </div>

                        {/* <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleAddToCartFromView}
                        >
                            <i className="fas fa-cart-plus"></i> Add to Cart
                        </button> */}
                        <div className="product-color-switch">
                            <ul>
                                <li>
                                    <a href="#">
                                        <svg width="20" height="22" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 10L8.07843 2H32.3922L38.4706 10M2 10V38C2 39.0609 2.42694 40.0783 3.18689 40.8284C3.94684 41.5786 4.97755 42 6.05229 42H34.4183C35.493 42 36.5237 41.5786 37.2837 40.8284C38.0437 40.0783 38.4706 39.0609 38.4706 38V10M2 10H38.4706M28.3399 18C28.3399 20.1217 27.486 22.1566 25.9661 23.6569C24.4462 25.1571 22.3848 26 20.2353 26C18.0858 26 16.0244 25.1571 14.5045 23.6569C12.9846 22.1566 12.1307 20.1217 12.1307 18" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="25" height="22" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M44.3244 5.53629C43.2038 4.41518 41.8734 3.52584 40.409 2.91907C38.9446 2.3123 37.375 2 35.7899 2C34.2048 2 32.6352 2.3123 31.1708 2.91907C29.7064 3.52584 28.376 4.41518 27.2554 5.53629L24.9298 7.86189L22.6042 5.53629C20.3407 3.27279 17.2707 2.00117 14.0696 2.00117C10.8686 2.00117 7.79861 3.27279 5.53512 5.53629C3.27162 7.79979 2 10.8697 2 14.0708C2 17.2719 3.27162 20.3418 5.53512 22.6053L7.86072 24.9309L24.9298 42L41.9988 24.9309L44.3244 22.6053C45.4455 21.4848 46.3349 20.1543 46.9416 18.6899C47.5484 17.2255 47.8607 15.6559 47.8607 14.0708C47.8607 12.4857 47.5484 10.9161 46.9416 9.45174C46.3349 7.98736 45.4455 6.65687 44.3244 5.53629Z" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>



                    <div className="buy-checkbox-btn">
                        <div className="item">
                            <input className="inp-cbx" id="cbx" type="checkbox" />
                            <label className="cbx" htmlFor="cbx">
                                <span>
                                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg>
                                </span>
                                <span>Sotib olish shart va majburiyatlariga roziman</span>
                            </label>
                        </div>

                        <div className="item">
                            <Link href="#">
                                <a className="btn btn-primary2">Naqd To’lov</a>
                            </Link>
                        </div>
                        <div className="item">
                            <Link href="#">
                                <a className="btn btn-primary2">Muddatli To’lov</a>
                            </Link>
                        </div>
                    </div>

                        
                </div>
            </div>
            {/* {sizeGuide ? <SizeGuide
                closeSizeGuide={closeSizeGuide}
            /> : ''}
            {shipModal ? <Shipping closeShipModal={closeShipModal} /> : ''} */}
        </>
    )
}

export default ProductContent

// class ProductContent extends Component {
//     state = {
//         qty: 1,
//         max: 10,
//         min: 1,
//         sizeGuide: false,
//         shipModal: false
//     };

//     handleAddToCartFromView = () => {
//         this.props.addQuantityWithNumber(this.props.product.id, this.state.qty); 

//         toast.success('Added to the cart', {
//             position: "bottom-left",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true
//         });
//     }

//     IncrementItem = () => {
//         this.setState(prevState => {
//             if(prevState.qty < 10) {
//                 return {
//                     qty: prevState.qty + 1
//                 }
//             } else {
//                 return null;
//             }
//         });
//     }

//     DecreaseItem = () => {
//         this.setState(prevState => {
//             if(prevState.qty > 1) {
//                 return {
//                     qty: prevState.qty - 1
//                 }
//             } else {
//                 return null;
//             }
//         });
//     }

//     openSizeGuide = () => {
//         this.setState({ sizeGuide: true });
//     }

//     closeSizeGuide = () => {
//         this.setState({ sizeGuide: false });
//     }

//     openShipModal = () => {
//         this.setState({ shipModal: true });
//     }

//     closeShipModal = () => {
//         this.setState({ shipModal: false });
//     }

//     render() {
//         const { sizeGuide, shipModal } = this.state;
//         return (
//             <React.Fragment>
//                 <div className="col-lg-6 col-md-6">
//                     <div className="product-details-content">
//                         <h3>Belted chino trousers polo</h3>

//                         <div className="price">
//                             <span className="new-price">$191.00</span>
//                         </div>

//                         {/* <div className="product-review">
//                             <div className="rating">
//                                 <i className="fas fa-star"></i>
//                                 <i className="fas fa-star"></i>
//                                 <i className="fas fa-star"></i>
//                                 <i className="fas fa-star"></i>
//                                 <i className="fas fa-star-half-alt"></i>
//                             </div>
//                             <Link href="#">
//                                 <a className="rating-count">3 reviews</a>
//                             </Link>
//                         </div> */}

//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

//                         <ul className="product-info">
//                             <li><span>Vendor:</span> <Link href="#"><a>Lereve</a></Link></li>
//                             <li><span>Availability:</span> <Link href="#"><a>In stock (7 items)</a></Link></li>
//                             <li><span>Product Type:</span> <Link href="#"><a>T-Shirt</a></Link></li>
//                         </ul>

//                         <div className="product-color-switch">
//                             <h4>Color:</h4>

//                             <ul>
//                                 <li>
//                                     <Link href="#">
//                                         <a title="Black" className="color-black"></a>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         <a title="White" className="color-white"></a>
//                                     </Link>
//                                 </li>
//                                 <li className="active">
//                                     <Link href="#">
//                                         <a title="Green" className="color-green"></a>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         <a title="Yellow Green" className="color-yellowgreen"></a>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         <a title="Teal" className="color-teal"></a>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="product-size-wrapper">
//                             <h4>Size:</h4>

//                             <ul>
//                                 <li>
//                                     <Link href="#">
//                                         <a>XS</a>
//                                     </Link>
//                                 </li>
//                                 <li className="active">
//                                     <Link href="#">
//                                         <a>S</a>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         <a>M</a>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         <a>XL</a>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         <a>XXL</a>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="product-info-btn">
//                             <Link href="#">
//                                 <a
//                                     onClick={e => {
//                                         e.preventDefault(); 
//                                         openSizeGuide();
//                                     }}
//                                 >
//                                     <i className="fas fa-crop"></i> Size guide
//                                 </a>
//                             </Link>
//                             <Link href="#">
//                                 <a
//                                     onClick={e => {
//                                         e.preventDefault(); 
//                                         openShipModal();
//                                     }}
//                                 >
//                                     <i className="fas fa-truck"></i> Shipping
//                                 </a>
//                             </Link>

//                             {/* <Link href="#">
//                                 <a>
//                                     <i className="far fa-envelope"></i> Ask about this product
//                                 </a>
//                             </Link> */}
//                         </div>

//                         <div className="product-add-to-cart">
//                             <div className="input-counter">
//                                 <span 
//                                     className="minus-btn"
//                                     onClick={this.DecreaseItem}
//                                 >
//                                     <i className="fas fa-minus"></i>
//                                 </span>
//                                 <input 
//                                     type="text" 
//                                     value={this.state.qty}
//                                     min={this.state.min}
//                                     max={this.state.max} 
//                                     onChange={e => this.setState({ qty: e.target.value })}
//                                 />
//                                 <span 
//                                     className="plus-btn"
//                                     onClick={this.IncrementItem}
//                                 >
//                                     <i className="fas fa-plus"></i>
//                                 </span>
//                             </div>

//                             <button 
//                                 type="submit" 
//                                 className="btn btn-primary"
//                                 onClick={this.handleAddToCartFromView}
//                             >
//                                 <i className="fas fa-cart-plus"></i> Add to Cart
//                             </button>
//                         </div>

//                         <div className="wishlist-compare-btn">
//                             <Link href="#">
//                                 <a className="btn btn-light">
//                                     <i className="far fa-heart"></i> Add to Wishlist
//                                 </a>
//                             </Link>

//                             <Link href="#">
//                                 <a className="btn btn-light">
//                                     <i className="fas fa-balance-scale"></i> Add to Compare
//                                 </a>
//                             </Link>
//                         </div>

//                         <div className="buy-checkbox-btn">
//                             <div className="item">
//                                 <input className="inp-cbx" id="cbx" type="checkbox" />
//                                 <label className="cbx" htmlFor="cbx">
//                                     <span>
//                                         <svg width="12px" height="10px" viewBox="0 0 12 10">
//                                             <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
//                                         </svg>
//                                     </span>
//                                     <span>I agree with the terms and conditions</span>
//                                 </label>
//                             </div>

//                             <div className="item">
//                                 <Link href="#">
//                                     <a className="btn btn-primary">Buy it now!</a>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="custom-payment-options">
//                             <span>Guaranteed safe checkout:</span>

//                             <div className="payment-methods">
//                                 <Link href="#">
//                                     <a>
//                                         <img src={require("../../images/payment-image/1.svg")} alt="image" />
//                                     </a>
//                                 </Link>

//                                 <Link href="#">
//                                     <a>
//                                         <img src={require("../../images/payment-image/2.svg")} alt="image" />
//                                     </a>
//                                 </Link>

//                                 <Link href="#">
//                                     <a>
//                                         <img src={require("../../images/payment-image/3.svg")} alt="image" />
//                                     </a>
//                                 </Link>

//                                 <Link href="#">
//                                     <a>
//                                         <img src={require("../../images/payment-image/4.svg")} alt="image" />
//                                     </a>
//                                 </Link>

//                                 <Link href="#">
//                                     <a>
//                                         <img src={require("../../images/payment-image/5.svg")} alt="image" />
//                                     </a>
//                                 </Link>

//                                 <Link href="#">
//                                     <a>
//                                         <img src={require("../../images/payment-image/6.svg")} alt="image" />
//                                     </a>
//                                 </Link>

//                                 <Link href="#">
//                                     <a>
//                                         <img src={require("../../images/payment-image/7.svg")} alt="image" />
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 { sizeGuide ? <SizeGuide 
//                     closeSizeGuide={this.closeSizeGuide} 
//                 /> : '' }
//                 { shipModal ? <Shipping closeShipModal={this.closeShipModal} /> : '' }
//             </React.Fragment>
//         );
//     }
// }

// const mapDispatchToProps= (dispatch)=>{
//     return {
//         addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
//     }
// }

// export default connect(
//     null,
//     mapDispatchToProps
// )(ProductContent)