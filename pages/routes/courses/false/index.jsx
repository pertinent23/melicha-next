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
                        <div className="container-fluid py-5 px-5">
                            <div className="container-fluid text-center py-5 px-2" style={{ fontWeight: 600, fontSize: '1.2em' }}>
                            L’informatique est la science du traitement automatique et rationnel de l’information à l’aide de l’ordinateur. L’information elle c’est un ensemble de données traitées et ayant un sens. L’outil qui est au centre de tout ça c’est l’ordinateur. L’ordinateur est une machine automatique de traitement de l’information constitué de deux parties : le hardware ou partie matérielle et le software ou partie logicielle. 
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    );
};

False.page = page;