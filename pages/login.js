import React, { Component, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import SocialButtons from '../components/auth/Social';
import Auth from '../service/auth';
import toast from '../util/toast';

const auth = new Auth();

const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await auth.signInWithEmailAndPassword(userInfo);
            const username = response.user.firstName + " " + response.user.lastName;
            toast.success(`${username} has been successfully logged in.`);
        } catch (err) {
            toast.error(err.data.error)
        }
    }

    const onChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
    }

    return (
        <React.Fragment>
            <Navbar />
            <Breadcrumb title="Kirish" />
            <section className="login-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-content">
                                

                            <a href='https://t.me/mareewbot/?start' target='_blank' className="btn btn-primary w-50 m-auto">Login</a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-customer-content">
                                <h2>Yo'riqnoma</h2>
                                <p>Mareew do'konida shaxsiy hisobingizni yaratish uchun "Kirish" tugmasini bosib telegram bot orqali ro'yhatdan o'tishingiz kerak.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Facility /> */}
            <Footer />
        </React.Fragment>
    );
}

export default Login;
