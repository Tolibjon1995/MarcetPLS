import React, { Component } from 'react';
import Link from 'next/link';
import QuickView from '../Modal/QuickView';
import dynamic from 'next/dynamic';
import AddToCart from '../Shared/AddToCart';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class TrendingProductsSlide extends Component {
    state = {
        modalOpen: false,
        modalData: null,
        display: false,
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (data) => {
        this.setState({ 
            modalData: data
        });
    }

    render() {
        let { productss } = this.props;
        const { modalOpen } = this.state;
        let baseURL = 'https://api.mareew.uz/'
        return (
            <section className="trending-products-area ptb-60">
                <div className="container">
                    <div className="section-title without-bg">
                        <h2><span className="dot"></span> Trending Products</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="trending-products-slides-two owl-carousel owl-theme"
                            {...options}
                        >
                            {productss.map((data, idx) => (
                                <div className="col-12" key={idx}>
                                <div className="single-product-box w-100">
                                    <div className="product-image">
                                        <Link href="/product/[id]" as={`/product/${data.id}`}>
                                            <a>
                                                <img src={baseURL+data.images} alt="image" />
                                                {/* <img src={data.imageHover} alt="image" /> */}
                                            </a>
                                        </Link>

                                        {/* <ul>
                                            <li>
                                                <Link href="#">
                                                    <a 
                                                        data-tip="Quick View" 
                                                        data-place="left" 
                                                        onClick={e => {
                                                                e.preventDefault(); 
                                                                this.openModal();
                                                                this.handleModalData(data)
                                                            }
                                                        }
                                                    >
                                                        <i className="far fa-eye"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a data-tip="Add to Wishlist" data-place="left">
                                                        <i className="far fa-heart"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                {
                                                    this.compareButton(data.id)
                                                }
                                            </li>
                                        </ul> */}
                                    </div>
                                     <div className='row'>
                                        <div className='col-10'>
                                        <div className="product-content">
                                        <h4>  
                                            MAREEW 
                                        </h4>
                                        <h3>
                                            <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                <a>{data.name}</a>
                                            </Link>
                                        </h3>

                                        <div className="product-price">
                                            <span className="new-price">{data.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} So’m</span>
                                        </div>
                                    </div>
                                        </div>
                                        <div className='col-2 pl-1 d-flex align-items-center'>
                                            <Link href="#">
                                                    <a data-tip="Sevimlilarga qo'shish" data-place="left">
                                                        <i className="text-red fs-24 far fa-heart"></i>
                                                    </a>
                                            </Link>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                </div>
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    modalData={this.state.modalData}
                /> : '' }
            </section>
        );
    }
}

export default TrendingProductsSlide
