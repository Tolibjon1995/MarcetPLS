import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/shop-style-one/Banner';
import OfferArea from '../components/shop-style-one/OfferArea';
import Products from '../components/shop-style-one/Products';
import CategoryProducts from '../components/shop-style-one/CategoryProducts';
import ProductOffer from '../components/shop-style-one/ProductOffer';
import TrendingProducts from '../components/shop-style-one/TrendingProducts';
import TrendingProductsSlide from '../components/shop-style-one/TrendingProductsSlide';
import BestSeller from '../components/shop-style-one/BestSellers';
import Facility from '../components/shop-style-one/Facility';
import Testimonials from '../components/Common/Testimonials';
import News from '../components/Common/News';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';
import Axios from 'axios';
import { useRouter } from 'next/router';

import base from '../api/base';
import TestPage from '../components/shop-style-one/TestPage';

const Index = () => {
    const router = useRouter()
    const { telegramcode } = router?.query


    const [productss, setProductss] = useState([])
    const [category, setCategory] = useState([])
    const [brend, setBrend] = useState([])
    const products = useSelector((state) => state.products)
    const products2 = useSelector((state) => state.products2)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    const [popular, setPopular] = useState([])
    const [loader, setLoader] = useState(false)
    const [user, setUser] = useState({user:''})


    

    useEffect(() => {
        setLoader(true)
        const myTimeout = setTimeout(myGreeting, 2000);
        return () => clearTimeout(myTimeout)
    }, [telegramcode])




    function myGreeting() {
        if (telegramcode) {
            setProductss([])
            setBrend([]);
            Axios.post(`https://api.mareew.uz/shared/auth/login`, {
                "name": telegramcode
            }).then((res) => {
                localStorage.setItem("access", res.data.token, { path: "/" })
                localStorage.setItem("refresh", telegramcode, { path: "/" })
                
                if (res.status == 200 ) {
                    
                    base.get(`/me/`).then((res)=>{
                        if (res.status == 200) {
                            setUser({
                                user: res.data.user
                            });
                        }
                        
                    })
                    base.get(`/customer/product/popular`).then(({ status, data: { products } }) => {
                        if (status == 200) {
                            setPopular(products)
                            setLoader(false)
                        }
                    })
                    base.get(`/customer/product/`).then((res) => {
                        if (res.status == 200) {
                            setProductss(res.data.products);
                            setLoader(false)
                        }
                    })
                    base.get(`/customer/category/`).then((res) => {
                        if (res.status == 200) {
                            setCategory(res.data.categories);
                            setLoader(false)
                        }
                    })
                    base.get(`/customer/brand/`).then((res) => {
                        if (res.status == 200) {
                            setBrend(res.data.brands);
                            setLoader(false)
                        }
                    })
                }else if(res.status == 401) {

                    Axios.get(`https://api.mareew.uz/shared/product/popular`).then(({ status, data: { products } }) => {
                        if (status == 200) {
                            setPopular(products)
                            setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/product/`).then((res) => {
                        if (res.status == 200) {
                            setProductss(res.data.products);
                            setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/category/`).then((res) => {
                        if (res.status == 200) {
                            
                            setCategory(res?.data?.categories);
                            // setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/brand/`).then((res) => {
                        if (res.status == 200) {
                            setBrend(res.data.brands);
                            setLoader(false)
                        }
                    })
                }else {
                    Axios.get(`https://api.mareew.uz/shared/product/popular`).then(({ status, data: { products } }) => {
                        if (status == 200) {
                            setPopular(products)
                            setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/product/`).then((res) => {
                        if (res.status == 200) {
                            setProductss(res.data.products);
                            setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/category/`).then((res) => {
                        if (res.status == 200) {
                            
                            setCategory(res?.data?.categories);
                            // setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/brand/`).then((res) => {
                        if (res.status == 200) {
                            setBrend(res.data.brands);
                            setLoader(false)
                        }
                    })
                }

            }).catch((err)=>{
                localStorage.removeItem('access');
                localStorage.removeItem('refresh');
                    Axios.get(`https://api.mareew.uz/shared/product/popular`).then(({ status, data: { products } }) => {
                        if (status == 200) {
                            setPopular(products)
                            setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/product/`).then((res) => {
                        if (res.status == 200) {
                            setProductss(res.data.products);
                            setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/category/`).then((res) => {
                        if (res.status == 200) {
                            
                            setCategory(res?.data?.categories);
                            // setLoader(false)
                        }
                    })
                    Axios.get(`https://api.mareew.uz/shared/brand/`).then((res) => {
                        if (res.status == 200) {
                            setBrend(res.data.brands);
                            setLoader(false)
                        }
                    })
                
            })

        } else {
            Axios.get(`https://api.mareew.uz/shared/product/popular`).then(({ status, data: { products } }) => {
                if (status == 200) {
                    setPopular(products)
                    setLoader(false)
                }
            })
            Axios.get(`https://api.mareew.uz/shared/product/`).then((res) => {
                if (res.status == 200) {
                    setProductss(res.data.products);
                    setLoader(false)
                }
            })
            Axios.get(`https://api.mareew.uz/shared/category/`).then((res) => {
                if (res.status == 200) {
                    
                    setCategory(res?.data?.categories);
                    // setLoader(false)
                }
            })
            Axios.get(`https://api.mareew.uz/shared/brand/`).then((res) => {
                if (res.status == 200) {
                    setBrend(res.data.brands);
                    setLoader(false)
                }
            })
        }
    }



    console.log(user);




    return (
        <React.Fragment>
            {
                loader ?
                    <div className="bg-loader">
                        <span className="loader">
                            <span className="loader-inner"></span>
                        </span>
                    </div>
                    :
                    <>
                        <Navbar user={user.user}/>
                        <Banner popular={popular} />
                        {/* <OfferArea /> */}
                        <Products productss={productss.slice(0, 8)} CompareProducts={addedItemsToCompare} />
                        <CategoryProducts category={category} />
                        {/* <TestPage bgImg={brend[1]} /> */}
                        {
                            brend?.map((item, index) => {

                                return (
                                    <>
                                        <ProductOffer
                                            bgImg={item}

                                            left={index % 2 === 0 ? true : false} />
                                        <TrendingProductsSlide productss={productss.slice(0, 8)} CompareProducts={addedItemsToCompare} />
                                    </>
                                )
                            })
                        }

                        <Partner />
                        <InstagramPhoto />
                        <Footer />
                        {/* <AddsModal /> */}
                    </>
            }


        </React.Fragment>
    );
}

export default Index;
{/* <ProductOffer  left={true} />
            <TrendingProductsSlide productss={productss.slice(0, 8)} CompareProducts={addedItemsToCompare} />
            <ProductOffer left={false} />
            <TrendingProductsSlide productss={productss.slice(0, 8)} CompareProducts={addedItemsToCompare} /> */}
{/* <TrendingProducts products={products.slice(0, 8)} CompareProducts={addedItemsToCompare} />
            <BestSeller products={products.slice(8, 12)} CompareProducts={addedItemsToCompare} />
            <Facility />
            <Testimonials />
            <News />
            <Subscribe /> */}