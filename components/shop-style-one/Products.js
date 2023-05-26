// import React from 'react';
// import Link from 'next/link';
// import QuickView from '../Modal/QuickView';
// import AddToCart from '../Shared/AddToCart';
// import AddToCompare from '../Shared/AddToCompare';
// import axios from 'axios';

// class Products extends React.Component {

//     state = {
//         modalOpen: false,
//         modalData: null,
//         productss: []
//     };

//     openTabSection = (evt, tabNmae) => {
//         let i, tabcontent, tablinks;
//         tabcontent = document.getElementsByClassName("tabs_item");
//         for (i = 0; i < tabcontent.length; i++) {
//             tabcontent[i].classList.remove("fadeInUp");
//             tabcontent[i].style.display = "none";
//         }

//         tablinks = document.getElementsByTagName("li");
//         for (i = 0; i < tablinks.length; i++) {
//             tablinks[i].className = tablinks[i].className.replace("current", "");
//         }

//         document.getElementById(tabNmae).style.display = "block";
//         document.getElementById(tabNmae).className += " fadeInUp animated";
//         evt.currentTarget.className += "current";
//     }

//     compareButton = (id) => {
//         let compare_exist = this.props.CompareProducts.filter(item => item.id === id);
//         if(compare_exist.length > 0){
//             return(
//                 <Link href="#">
//                     <a
//                         data-tip="Already Added"
//                         data-place="left"
//                         onClick={e => {
//                                 e.preventDefault();
//                             }
//                         }
//                         disabled={true}
//                         className="disabled"
//                     >
//                         <i className="fas fa-sync"></i>
//                     </a>
//                 </Link>
//             )
//         } else {
//             return(
//                 <AddToCompare id={id} />
//             )
//         }
//     }

//     openModal = () => {
//         this.setState({ modalOpen: true });
//     }

//     closeModal = () => {
//         this.setState({ modalOpen: false });
//     }

//     handleModalData = (data) => {
//         this.setState({
//             modalData: data
//         });
//     }

//     handleGetProduct =()=>{
//         axios.get(`https://api.mareew.uz/shared/product/`).then((res)=>{
//             console.log(res);
//         })
//     }

//     componentDidMount(){
//         axios.get(`https://api.mareew.uz/shared/product/`).then((res)=>{
//             if (res.status == 200) {
//                 this.setState({
//                     productss: this.setState.productss.push(res.data.products)
//                 });
//                 console.log(this.setState.productss);
//             }

//         })
//     }

//     render() {
//         let { products } = this.props;
//         const { modalOpen } = this.state;
//         return (
//             <section className="all-products-area pb-60">
//                 <div className="container">
//                     <div className="tab products-category-tab">
//                         <div className="row">

//                             <div className="col-lg-12 col-md-12">
//                                 <ul className="tabs">
//                                     <li
//                                         onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
//                                         className="current"
//                                     >
//                                         <span className="tabs-nav-text">
//                                             <span className="dot"></span> Latest Products
//                                         </span>
//                                     </li>

//                                 </ul>
//                             </div>

//                             <div className="col-lg-12 col-md-12">
//                                 <div className="tab_content">
//                                     <div id="tab1" className="tabs_item">
//                                         <div className="row">
//                                             {products.map((data, idx) => (
//                                                 <div className="col-lg-3 col-sm-6 col-6" key={idx}>
//                                                     <div className="single-product-box">
//                                                         <div className="product-image">
//                                                             <Link href="/product/[id]" as={`/product/${data.id}`}>
//                                                                 <a>
//                                                                     <img src={data.image} alt="image" />
//                                                                     <img src={data.imageHover} alt="image" />
//                                                                 </a>
//                                                             </Link>

//                                                             {/* <ul>
//                                                                 <li>
//                                                                     <Link href="#">
//                                                                         <a
//                                                                             data-tip="Quick View"
//                                                                             data-place="left"
//                                                                             onClick={e => {
//                                                                                     e.preventDefault();
//                                                                                     this.openModal();
//                                                                                     this.handleModalData(data)
//                                                                                 }
//                                                                             }
//                                                                         >
//                                                                             <i className="far fa-eye"></i>
//                                                                         </a>
//                                                                     </Link>
//                                                                 </li>
//                                                                 <li>
//                                                                     <Link href="#">
//                                                                         <a data-tip="Add to Wishlist" data-place="left">
//                                                                             <i className="far fa-heart"></i>
//                                                                         </a>
//                                                                     </Link>
//                                                                 </li>
//                                                                 <li>
//                                                                     {
//                                                                         this.compareButton(data.id)
//                                                                     }
//                                                                 </li>
//                                                             </ul> */}
//                                                         </div>
//                                                          <div className='row'>
//                                                             <div className='col-10'>
//                                                             <div className="product-content">
//                                                             <h4>
//                                                                 MAREEW
//                                                             </h4>
//                                                             <h3>
//                                                                 <Link href="/product/[id]" as={`/product/${data.id}`}>
//                                                                     <a>{data.title}</a>
//                                                                 </Link>
//                                                             </h3>

//                                                             <div className="product-price">
//                                                                 <span className="new-price">{data.price} So’m</span>
//                                                             </div>
//                                                         </div>
//                                                             </div>
//                                                             <div className='col-2 pl-1 d-flex align-items-center'>
//                                                                 <Link href="#">
//                                                                         <a data-tip="Sevimlilarga qo'shish" data-place="left">
//                                                                             <i className="text-red fs-24 far fa-heart"></i>
//                                                                         </a>
//                                                                 </Link>
//                                                             </div>
//                                                          </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 { modalOpen ? <QuickView
//                     closeModal={this.closeModal}
//                     modalData={this.state.modalData}
//                 /> : '' }
//             </section>
//         );
//     }
// }

// export default Products

import React, { useEffect, useState } from "react";
import Link from "next/link";
import QuickView from "../Modal/QuickView";
import AddToCart from "../Shared/AddToCart";
import AddToCompare from "../Shared/AddToCompare";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavourites } from "../../redux/favourites";

const Products = ({ productss }) => {
  const dispatch = useDispatch();
  let baseURL = "https://api.mareew.uz/";
  const [modalData, setModalData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const favourites = useSelector(({ favourites }) => favourites);
  // const [productss, setProductss] = useState([])

  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  const compareButton = (id) => {
    let compare_exist = productss.filter((item) => item.id === id);
    if (compare_exist.length > 0) {
      return (
        <Link href="#">
          <a
            data-tip="Already Added"
            data-place="left"
            onClick={(e) => {
              e.preventDefault();
            }}
            disabled={true}
            className="disabled"
          >
            <i className="fas fa-sync"></i>
          </a>
        </Link>
      );
    } else {
      return <AddToCompare id={id} />;
    }
  };

  const openModal = () => {
    setModalOpen({ modalOpen: true });
  };

  const closeModal = () => {
    setModalOpen({ modalOpen: false });
  };

  const handleModalData = (data) => {
    setModalData({
      modalData: data,
    });
  };

  const handleGetProduct = () => {
    axios.get(`https://api.mareew.uz/shared/product/`).then((res) => {});
  };

  const storageData = (id) => {
    let data = JSON.parse(localStorage["favourites"] || "[]");
    if (data.find((_id) => _id === id)) {
      data = data.filter((_id) => _id !== id);
    } else {
      data.push(id);
    }

    localStorage.setItem("favourites", JSON.stringify(data));
    dispatch(setFavourites(data));
  };

  // useEffect(() => {
  //     axios.get(`https://api.mareew.uz/shared/product/`).then((res) => {
  //         if (res.status == 200) {
  //             setProductss(res.data.products);

  //         }

  //     })
  // }, [])

  useEffect(() => {
    let data = JSON.parse(localStorage["favourites"] || "[]");
    dispatch(setFavourites(data));
  }, []);
  let refresh =
    typeof window !== "undefined"
      ? window.localStorage.getItem("refresh")
      : false;

  const isFavourite = (id) => favourites.includes(id);

  return (
    <section className="all-products-area pb-60">
      <div className="container">
        <div className="tab products-category-tab">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <ul className="tabs">
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    this.openTabSection(e, "tab1");
                  }}
                  className="current"
                >
                  <span className="tabs-nav-text"></span>
                </li>
              </ul>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <div className="row">
                    {productss?.map((data, idx) => (
                      <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                        <div className="single-product-box">
                          <div className="product-image">
                            {refresh ? (
                              <Link
                                href={`/product/${data.id}/?telegramcode${refresh}`}
                                as={`/product/${data.id}`}
                              >
                                <a>
                                  <img
                                    className="produckt-img"
                                    src={baseURL + data.images[0]}
                                    alt="image"
                                  />
                                  {/* <img src={data.imageHover} alt="image" /> */}
                                </a>
                              </Link>
                            ) : (
                              <Link
                                href={`/product/${data.id}`}
                                as={`/product/${data.id}`}
                              >
                                <a>
                                  <img
                                    className="produckt-img"
                                    src={baseURL + data.images[0]}
                                    alt="image"
                                  />
                                  {/* <img src={data.imageHover} alt="image" /> */}
                                </a>
                              </Link>
                            )}
                          </div>
                          <div className="row">
                            <div className="col-10">
                              <div className="product-content">
                                <h4>MAREEW</h4>
                                <h3>
                                  {refresh ? (
                                    <Link
                                      href={`/product/[id]/?telegramcode${refresh}`}
                                      as={`/product/${data.id}/?telegramcode${refresh}`}
                                    >
                                      <a>{data.name}</a>
                                    </Link>
                                  ) : (
                                    <Link
                                      href="/product/[id]"
                                      as={`/product/${data.id}`}
                                    >
                                      <a>{data.name}</a>
                                    </Link>
                                  )}
                                </h3>

                                <div className="product-price">
                                  <span className="new-price">
                                    {data.price
                                      .toString()
                                      .replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        " "
                                      )}{" "}
                                    So’m
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-2 pl-1 d-flex align-items-center">
                              <div
                                className={
                                  isFavourite(data?.id) ? "is-favourite" : ""
                                }
                                onClick={() => storageData(data?.id)}
                              >
                                <div
                                  className="c-pointer"
                                  data-tip="Sevimlilarga qo'shish"
                                  data-place="left"
                                >
                                  {isFavourite(data?.id) ? (
                                    <i className="text-red fs-24 far fa-heart"></i>
                                  ) : (
                                    <i
                                      className={`fa fa-solid fs-24 text-red fa-heart`}
                                    ></i>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen ? (
        <QuickView
          closeModal={this.closeModal}
          modalData={this.state.modalData}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default Products;
