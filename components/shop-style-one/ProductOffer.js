import React, { Component } from 'react';
import Link from 'next/link';

class ProductOffer extends Component {
    render() {
        let { left } = this.props;
        return (
            <div className={`offer-area-two ${left ? 'offer-bg-image' : 'offer-bg-image2'} mt-60`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-lg-5 col-md-6 ${left ? 'offset-lg-7 offset-md-6' : 'offset-lg-0 offset-md-0'} `}>
                            <div className="offer-content-box">
                                <span className="sub-title">2022 yil maxsuloti</span>
                                <h2>To’g’ri choklar</h2>
                                <p>Eng zo’rini tanlang!</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Batafsil</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductOffer;
