import React from 'react';
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

const Index = () => {
    const products = useSelector((state) => state.products)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    return (
        <React.Fragment>
            <Navbar />
            <OfferArea />
            {/* <Banner />
            
            <Products products={products.slice(0, 8)} CompareProducts={addedItemsToCompare} />
            <CategoryProducts  />
            <ProductOffer left={true} />
            <TrendingProductsSlide  products={products.slice(0, 8)} CompareProducts={addedItemsToCompare} />
            <ProductOffer left={false} />
            <TrendingProductsSlide  products={products.slice(0, 8)} CompareProducts={addedItemsToCompare} /> */}
            {/* <TrendingProducts products={products.slice(0, 8)} CompareProducts={addedItemsToCompare} />
            <BestSeller products={products.slice(8, 12)} CompareProducts={addedItemsToCompare} />
            <Facility />
            <Testimonials />
            <News />
            <Subscribe /> */}
            {/* <Partner /> */}
            <InstagramPhoto />
            <Footer />
        </React.Fragment>
    );
}

export default Index;
