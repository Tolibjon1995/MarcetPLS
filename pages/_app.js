import '../public/assets/styles/bootstrap.min.css';
import '../public/assets/styles/fontawesome.min.css';
import '../public/assets/styles/animate.min.css';
import '../public/assets/styles/slick.css';
import '../public/assets/styles/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/assets/styles/style.css';
import '../public/assets/styles/responsive.css';
import '../public/assets/styles/imageAnimate.css';
import '../public/assets/styles/testpage.css'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import Layout from '../components/_App/Layout';
import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
import { store } from '../redux/store';


const MyApp = ({ Component, pageProps }) => {

    return (
        <Layout>
            <Provider store={store}>

                    <Component {...pageProps} />

            </Provider>
        </Layout>
    );
}

export default MyApp