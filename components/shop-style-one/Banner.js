import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner bg-baner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className='row'>
                            <div className="col-12 col-md-6 main-banner-content d-flex align-items-center">
                            <div>
                                <span>New Inspiration 2020</span>
                                <h1>CLOTHING MADE FOR YOU!</h1>
                                <p>Trending from men and women style collection</p>

                                <Link href="#">
                                    <a className="btn btn-primary">Shop Women's</a>
                                </Link>
                                {/* <Link href="#">
                                    <a className="btn btn-light">Shop Men's</a>
                                </Link> */}
                            </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                 <img src={require("../../images/mareew081.png")} alt='' />       
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
