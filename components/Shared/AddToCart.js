import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';
import base from '../../api/base';

import { get_card, post_card } from '../../redux/cardProduct/card';

const AddToCart = ({ data }) => {
    const dispatch = useDispatch()
    
    let refresh = typeof window !== "undefined" ? window.localStorage.getItem('refresh') : false;
    const handleAddToCart = (data) => {
        if (refresh) {
            dispatch(post_card(data))
            dispatch(get_card(`/customer/cart`))
            
        } else {
            if (Cookies.get('cart')) {
                let newData = []
                newData = Cookies.get('cart')
                newData = JSON.parse(newData)
                newData.push(data)
                Cookies.set('cart', JSON.stringify(newData));


                console.log(newData);
            }

            toast.success('Savatchaga saqlandi', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }

    }

    return (
        <Link href="#">
            <a
                className="btn btn-light"
                onClick={(e) => {
                    e.preventDefault(); handleAddToCart(data)
                }}
            >
                Savatcha
            </a>
        </Link>
    )
}

export default AddToCart;