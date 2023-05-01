import React from 'react';
import Link from 'next/link';


const CategoryProducts = ({category}) => {
    let count = 4
    if (count == 4) {
        return (
            <section className="category-products-area pt-60 pb-60" id='turkumlar'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 p-3">
                            <div className="single-category-box">
                                <img src={require("../../images/category-products-img1.jpg")} alt="image" />

                                <div className="category-content">
                                    <h3>Our Popular Products</h3>
                                    <Link href="#">
                                        <a className="btn btn-light">View More</a>
                                    </Link>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Winter Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img4.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Up to 75% OFF Spring Sale!</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else if (count == 5) {
        return (
            <section className="category-products-area pt-60 pb-60" id='turkumlar'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 p-3">
                            <div className="single-category-box mb-0">
                                <img src={require("../../images/category-products-img1.jpg")} alt="image" />

                                <div className="category-content">
                                    <h3>Our Popular Products</h3>
                                    <Link href="#">
                                        <a className="btn btn-light">View More</a>
                                    </Link>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Winter Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else if (count == 6) {
        return (
            <section className="category-products-area pt-60 pb-60" id='turkumlar'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Winter Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Winter Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Winter Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else if (count == 7) {
        return (
            <section className="category-products-area pt-60 pb-60" id='turkumlar'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 p-3">
                            <div className="single-category-box">
                                <img src={require("../../images/category-products-img1.jpg")} alt="image" />

                                <div className="category-content">
                                    <h3>Our Popular Products</h3>
                                    <Link href="#">
                                        <a className="btn btn-light">View More</a>
                                    </Link>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Winter Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 p-3">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img4.jpg")} alt="image" />

                                        <div className="category-content">
                                            <h3>Up to 75% OFF Spring Sale!</h3>
                                        </div>

                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-category-box">
                                <img src={require("../../images/category-products-img4.jpg")} alt="image" />

                                <div className="category-content">
                                    <h3>Up to 75% OFF Spring Sale!</h3>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-category-box">
                                <img src={require("../../images/category-products-img4.jpg")} alt="image" />

                                <div className="category-content">
                                    <h3>Up to 75% OFF Spring Sale!</h3>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default CategoryProducts