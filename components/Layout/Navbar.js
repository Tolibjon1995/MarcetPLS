import React, { Component } from 'react';
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import MegaMenu from './MegaMenu';

const Navbar = ({telegramcode}) => {
    
    return (
        <React.Fragment>
            {/* <TopPanel /> */}
            {/* <TopHeader /> */}
            <MegaMenu telegramcode={telegramcode ? true : false}/>
        </React.Fragment>
    );
}

export default Navbar