

// class ProductImage extends Component {

//     baseURL = 'https://api.mareew.uz/'

//     constructor(props) {
//         super(props);
//         this.state = {
//           nav1: null,
//           nav2: null,
//           pro: null
//         };
//       }

//       componentDidMount() {
//         axios.get(`https://api.mareew.uz/shared/product/20`).then((res)=>{
//             console.log(res.data.product);
//             this.setState({
//                 nav1: this.slider1,
//                 nav2: this.slider2,
//                 pro: res.data.product
//               });
//         })

//       }

//     renderSliderMainImages = () => {
//         return this.state.pro.map(({id, images}) => {
//             return (
//                 <div key={id}>
//                     <div className="item">
//                         <img src={baseURL+images} alt="image" />
//                     </div>
//                 </div>
//             )
//         })
//     }

//     renderSliderSubImages = () => {
//         return this.state.pro.map(({id, images}) => {
//             return (
//                 <div key={id}>
//                     <div className="item">
//                         <img src={baseURL+images} alt="image" />
//                     </div>
//                 </div>
//             )
//         })
//     }

//     render() {
//         return (
//             <div className="col-lg-6 col-md-6">
//                 <div className="products-page-gallery">
//                     <div className="product-page-gallery-main">
//                        <div>
//                             <Slider
//                                 asNavFor={this.state.nav2}
//                                 ref={slider => (this.slider1 = slider)}
//                             >
//                                 {
//                                     this.renderSliderMainImages()
//                                 }
//                             </Slider>
//                        </div>
//                     </div>

//                     <div className="product-page-gallery-preview">
//                         <div>
//                             <Slider
//                                 asNavFor={this.state.nav1}
//                                 ref={slider => (this.slider2 = slider)}
//                                 slidesToShow={5}
//                                 swipeToSlide={true}
//                                 focusOnSelect={true}
//                                 arrows={false}
//                                 dots={false}
//                             >
//                                 {
//                                     this.renderSliderSubImages()
//                                 }
//                             </Slider>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const DEFAULT_PROPS = [
//     {
//         id: 1,
//         image: require('../../images/product-details/1.jpg')
//     },
//     {
//         id: 2,
//         image: require('../../images/product-details/2.jpg')
//     },
//     {
//         id: 3,
//         image: require('../../images/product-details/3.jpg')
//     },
//     {
//         id: 4,
//         image: require('../../images/product-details/4.jpg')
//     },
//     {
//         id: 5,
//         image: require('../../images/product-details/5.jpg')
//     },
//     {
//         id: 6,
//         image: require('../../images/product-details/6.jpg')
//     },
//     {
//         id: 7,
//         image: require('../../images/product-details/7.jpg')
//     }
// ];

// export default ProductImage;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useRouter } from 'next/router';

const ProductImage = ({producti}) => {
    let baseURL = 'https://api.mareew.uz/'

    const [product, setProduct] = useState(null)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const router = useRouter()
    const { id } = router.query
    console.log(id);

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
    useEffect(() => {
        axios.get(`https://api.mareew.uz/shared/product/${id}`).then((res) => {
            setProduct(res.data.product);
            
        })
    }, [])

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
                                        <SwiperSlide style={{width: '450px', height: '358px' }} key={index}>
                                            <div className="item w-100 h-100">
                                                <img className='w-100 h-100' src={baseURL + item} alt="image" />
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
                                        <SwiperSlide style={{width: '100px', height: '100px' }} key={index}>
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
