import React, { Component, useEffect } from 'react';
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import MegaMenu from './MegaMenu';
import base from '../../api/base';
import { useState } from 'react';

const Navbar = ({telegramcode}) => {
    const [user, setUser] = useState({user:''})
    useEffect(() => {

        base.get(`/me/`).then((res)=>{
            if (res.status == 200) {
                setUser({
                    user: res.data.user
                });
            }else if (res.status == 401) {
                console.log(res);
            }else{
                console.log(res);
            }
            
        })
        
    }, [])
    
    return (
        <React.Fragment>
            {/* <TopPanel /> */}
            {/* <TopHeader /> */}
            <MegaMenu user={user.user}/>
        </React.Fragment>
    );
}

export default Navbar