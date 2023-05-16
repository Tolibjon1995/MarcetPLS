import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useRouter } from 'next/router';
import base from '../../api/base';

const ProductImage = ({ producti }) => {
    let baseURL = 'https://api.mareew.uz/'

    const [product, setProduct] = useState(null)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const router = useRouter()
    const { id } = router?.query


    const renderSliderMainImages = () => {
        return product?.images?.map((item, index) => {
            return (
                <div key={index}>
                    <div className="item">
                        <img src={baseURL + item} alt="image" />
                    </div>
                </div>
            )
        })
    }

    const renderSliderSubImages = () => {
        return product?.images?.map((item, index) => {
            return (
                <div key={index}>
                    <div className="item">
                        <img src={baseURL + item} alt="image" />
                    </div>
                </div>
            )
        })
    }



    return (
        <div className="col-lg-6 col-md-6">
            <div className="products-page-gallery">
                <div className="product-page-gallery-main">
                    <div>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {
                                producti?.images?.map((item, index) => {
                                    return (
                                        <SwiperSlide style={{ width: '450px', height: '500px' }} key={index}>
                                            <div className="item w-100 h-100">
                                                <img className='w-100 h-100' style={{ objectFit: 'contain' }} src={baseURL + item} alt="image" />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt-3"
                        >
                            {
                                producti?.images?.map((item, index) => {
                                    return (
                                        <SwiperSlide style={{ width: '100px', height: '100px' }} key={index}>
                                            <img style={{ height: '100%' }} src={baseURL + item} alt="image" />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductImage
