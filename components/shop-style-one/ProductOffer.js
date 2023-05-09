import React from 'react';
import Link from 'next/link';


const ProductOffer = ({ left, bgImg }) => {
    let baseURL = 'https://api.mareew.uz/'
    // {`col-lg-5 col-md-6 ${left ? 'offset-lg-7 offset-md-6' : 'offset-lg-0 offset-md-0'} `}

    
    return (
        <div
            style={{ backgroundImage: `url(${baseURL + bgImg?.background_image})` }}
            className={`offer-area-two ${left ? 'offer-bg-image' : 'offer-bg-image2'} mt-60`}
        >
            <div className="container-fluid">
                <div className="row pr">
                    {/* <div className={`col-12 col-md-6 bg1`}>
                        <img  className='jarallax' src={baseURL + bgImg?.background_image} alt="" />
                    </div> */}
                    <div className={`col-6 col-lg-5 col-md-6 ${left ? 'offset-6 offset-lg-7 offset-md-6' : 'offset-lg-0 offset-md-0'} `}>
                        <div className="offer-content-box">
                            <span className="sub-title">Yil brendi</span>
                            <h2>{bgImg?.name}</h2>
                            <p>{bgImg?.description}</p>
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

export default ProductOffer;
