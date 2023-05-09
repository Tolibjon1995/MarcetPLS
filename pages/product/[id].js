import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import RelatedProducts from '../../components/product-details/RelatedProducts';
import Facility from '../../components/shop-style-one/Facility';
import axios from 'axios';

const Product = () => {
    const [producti, setProducti] = useState(null)
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const { id } = router?.query

    
    const product = useSelector((state) => state.products.find(item => item.id === parseInt(id)))

    const products = useSelector((state) => state.products)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)

    


    useEffect(() => {
        
        if(id){
            setLoading(true)
            axios.get(`https://api.mareew.uz/shared/product/${id}`).then(({status, data: {product}}) => {
                
                if (status == 200) {
                    setProducti(product);
                    setLoading(false)
                } else if (status == 400) {
                }
            })
        }
    }, [id])


    return (
        <React.Fragment>
            <Navbar />
            <Breadcrumb title="Belted chino trousers polo" />

            <section className="products-details-area pt-60">
                <div className="container">
                    <div className="row">
                        <ProductImage producti={producti} />
                        <ProductContent producti={producti} />
                        <DetailsTab producti={producti}/>
                    </div>
                </div>

                <RelatedProducts products={products} CompareProducts={addedItemsToCompare} />

                <Facility />
            </section>

            <Footer />
        </React.Fragment>
    );
}

export default Product