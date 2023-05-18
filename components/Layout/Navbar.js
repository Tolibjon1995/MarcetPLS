import React, { Component, useEffect } from 'react';
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import MegaMenu from './MegaMenu';
import base from '../../api/base';
import { useState } from 'react';

const Navbar = ({user}) => {

    console.log(user);
    return (
        <React.Fragment>
            {/* <TopPanel /> */}
            {/* <TopHeader /> */}
            <MegaMenu user={user}/>
        </React.Fragment>
    );
}

export default Navbar