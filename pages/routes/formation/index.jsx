import Head from 'next/head';
import { Fragment } from 'react';
import Header from './../@header';

export const page = "formation";
export default function Formation ( ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/formation.css"/>
            </Head>
            <div className="container-fluid main-container h-100">
                <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <Header title={ "Formation" } />
                </div>
                <div className="container-fluid p-0 py-4 d-flex flex-row justify-content-center align-items-start content-fomation-item pt-5">
                    <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mb-4">
                        <div className="container d-flex justify-content-between start py-3">
                            <div className="item-title"> Hardware </div>
                            <div className="item-icon rounded d-flex justify-content-center align-items-center"> H </div>
                        </div>
                        <div className="item-text px-4">
                            Une courte description de cette formation.
                        </div>
                        <div className="container d-flex justify-content-end start pr-4">
                            <button className="btn rounded mb-4"> aller </button>
                        </div>
                    </div>
                    <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mb-4"></div>
                </div>
                <div className="container-fluid position-relative m-0 p-0 py-3 d-flex flex-column justify-content-center align-items-center rounded end-of-page">
                    <span> Plus aucun item. </span>
                </div>
            </div>
        </Fragment>
    );
};

Formation.page = page;