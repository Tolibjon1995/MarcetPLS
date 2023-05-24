import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
import base from '../../api/base';


const Product = () => {
    const [producti, setProducti] = useState(null)
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState(null)
    const dispatch = useDispatch()
    const router = useRouter()
    const { id } = router?.query


    // const product = useSelector((state) => state.products.find(item => item.id === parseInt(id)))

    const products = useSelector((state) => state.products)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)



    let refresh = typeof window !== "undefined" ? window.localStorage.getItem('refresh') : false;
    let user = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('test')) : false;
    useEffect(() => {
        setLoading(true)
        if (id) {
            if (refresh) {
                base.get(`/customer/product/${id}`).then((res) => {
                    setProducti(res.data.product);
                    setLoading(false)
                    
                    base.get(`/customer/category/${res.data.product.category.id}`).then((res)=>{
                        setCategory(res.data.category.products)
                    })
                })
            } else {
                setLoading(true)
                axios.get(`https://api.mareew.uz/shared/product/${id}`).then((res) => {
                    setProducti(res.data.product);
                    setLoading(false)
                    axios.get(`https://api.mareew.uz/shared/category/${res.data.product.category.id}`).then((res) => {
                    setCategory(res.data.category.products)
                    setLoading(false)
                })
                })
                
            }
        }
    }, [id])

    

    
    return (
        <React.Fragment>
            {
                loading ?
                    <div className="bg-loader">
                        <span className="loader">
                            <span className="loader-inner"></span>
                        </span>
                    </div>
                    :
                    <>
                        <Navbar user={user ? user : ''}/>
                        <Breadcrumb title="Belted chino trousers polo" />

                        <section className="products-details-area pt-60">
                            <div className="container">
                                <div className="row">
                                    <ProductImage producti={producti} />
                                    <ProductContent producti={producti} />
                                    <DetailsTab producti={producti} />
                                </div>
                            </div>

                            <RelatedProducts products={category} CompareProducts={addedItemsToCompare} />

                            <Facility />
                        </section>

                        <Footer />
                    </>
            }

        </React.Fragment>
    );
}

export default Product