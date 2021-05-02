import Head from 'next/head';
import { Fragment } from 'react';
import Header from './../@header';

export const page = "courses";
export default function Courses ( ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/courses.css"/>
            </Head>
            <div className="container-fluid main-container h-100">
                <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <Header title={ "Mes cours" } />
                </div>
                <div className="container-fluid p-0 py-4 d-flex flex-row justify-content-center align-items-center content-fomation-item pt-5 mb-5">
                    <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mb-4">
                        <div className="container d-flex justify-content-between start py-3">
                            <div className="item-title"> Cour 1 </div>
                            <div className="item-icon rounded d-flex justify-content-center align-items-center"> C </div>
                        </div>
                        <div className="item-text px-4">
                            Une courte description du cour.
                        </div>
                        <div className="container d-flex justify-content-end start pr-4">
                            <button className="btn rounded mb-4"> lire </button>
                        </div>
                    </div>
                    <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mb-4">
                        <div className="container d-flex justify-content-between start py-3">
                            <div className="item-title"> Cour 2 </div>
                            <div className="item-icon rounded d-flex justify-content-center align-items-center"> C </div>
                        </div>
                        <div className="item-text px-4">
                            Une courte description du cour.
                        </div>
                        <div className="container d-flex justify-content-end start pr-4">
                            <button className="btn rounded mb-4"> lire </button>
                        </div>
                    </div>
                    <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mb-4"></div>
                </div>
            </div>
        </Fragment>
    );
};

Courses.page = page;