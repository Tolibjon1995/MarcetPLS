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

const Index = () => {
    const router = useRouter()
    const { telegramcode } = router?.query


    const [productss, setProductss] = useState([])
    const [brend, setBrend] = useState([])
    const products = useSelector((state) => state.products)
    const products2 = useSelector((state) => state.products2)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)


    const load = () => {


    }

    useEffect(() => {
        
        if (telegramcode) {
            load()
        }else{
            load2()
        }
        
    }, [telegramcode])
    const load2 = () => {
        Axios.get(`https://api.mareew.uz/shared/product/`).then((res) => {
            if (res.status == 200) {
                setProductss(res.data.products);
            }
        })
        Axios.get(`https://api.mareew.uz/shared/brand/`).then((res) => {
            if (res.status == 200) {
                setBrend(res.data.brands);

            }
        })

    }
    

    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            {/* <OfferArea /> */}
            <Products productss={productss.slice(0, 8)} CompareProducts={addedItemsToCompare} />
            <CategoryProducts />
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
            <Partner />
            <InstagramPhoto />
            <Footer />
            {/* <AddsModal /> */}
        </React.Fragment>
    );
}

export default Index;
