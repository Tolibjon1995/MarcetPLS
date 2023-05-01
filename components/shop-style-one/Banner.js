import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

const Banner = ({popular}) => {
    let baseURL = 'https://api.mareew.uz/'


    return (

        <div>
            <Swiper
                // slidesPerView={1}
                loop={true}
                spaceBetween={0}
                // effect={"fade"}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    popular?.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="main-banner bg-baner" style={{ backgroundColor: item.background_color }}>
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <div className="container">

                                                <div className='row'>
                                                    <div className="col-6 col-md-6 main-banner-content d-flex align-items-center">
                                                        <div>
                                                            <span>{item.popular_text}</span>
                                                            <h1>{item.name}</h1>
                                                            <p>{item.description}</p>

                                                            <Link href={`/product/${item.id}`}>
                                                                <a className="btn btn-primary">Buyurtma berish</a>
                                                            </Link>
                                                            {/* <Link href="#">
                                                            <a className="btn btn-light">Shop Men's</a>
                                                        </Link> */}
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-6'>
                                                        <img className="img-animate" src={baseURL + item?.main_image} alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper >
        </div>


    );
}

export default Banner;
