import React from 'react';
import Head from 'next/head';
import GoTop from '../Shared/GoTop';
import { ToastContainer, Slide } from 'react-toastify';
import ReactTooltip from 'react-tooltip'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <ReactTooltip  />
            <Head>
                <title>Mareew</title>
                <meta name="description" content="O'zbekistondagi birinchi raqamli internet do'kon" />
                <meta name="og:title" property="og:title" content="Mareew "></meta>
                <meta name="twitter:card" content="Mareew"></meta>
                <link rel="canonical" href="../../images/logo.png"></link>
                <link rel="icon" type="image/png" href="../../images/logo.png"></link>
                <meta property="og:image" content="../../images/logo.png" />
                <script src="https://telegram.org/js/telegram-web-app.js"></script>
                
                {/* https://res.cloudinary.com/dev-empty/image/upload/v1590076309/ppuymfucr4jubqvhqaqt.jpg */}
                {/* https://novine-react.envytheme.com/ */}
            </Head>
            { children }
            <ToastContainer transition={Slide} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}
export default Layout;