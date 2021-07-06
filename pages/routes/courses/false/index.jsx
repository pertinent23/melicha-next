import Head from 'next/head';
import { Fragment } from 'react';
import { page } from './../[formation]';
import Header from './../../@header';

export default function False () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/courses.css"/>
            </Head>
            <div className="container-fluid main-container h-100 d-none px-0">
                <div className="container-fluid content-icon position-absolute d-flex h-100 w-100 justify-content-center align-items-center">
                    <img src="/img/myClass.svg" alt="icon" className="img img-responsive"/>
                </div>
                <div className="container-fluid content-page px-0">
                    <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                        <Header title={ "Rappel" } />
                    </div>
                    
                </div>
            </div>
        </Fragment>
    );
};

False.page = page;