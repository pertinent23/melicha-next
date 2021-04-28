import Head from 'next/head';
import { Fragment } from 'react';

export const page = "formation";
export default function Formation ( ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/formation.css"/>
            </Head>
            <div className="container-fluid main-container h-100">
                <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <div className="container-fluid row d-flex align-items-center p-0 mt-4">
                        <div className="col col-lx-2 align-items-end d-none d-lg-flex h-100">
                            <h3 className="text-left text-dark text-align-baseline"> Formation </h3>
                        </div>
                        <div className="col col-lx-6 p-0 px-3">
                            <div className="container ml-lg-0 input-group search-space d-flex justify-content-center align-items-center px-1 pl-2">
                                <input type="text" name="search" id="search" className="form-control search-field" placeholder="Recherche:" />
                                <div className="input-group-append d-flex position-relative justify-content-center align-items-center h-100">
                                    <img src="/img/search.svg" alt="search" className="img d-block position-relative" height="20" width="20" />
                                </div>
                            </div>
                        </div>
                        <div className="col-2 col-md-4 col-lg-3 p-0 px-2 d-flex justify-content-center">
                            <div className="d-flex position-relative justify-content-center align-items-center user-icon-container p-1 shadow">
                                <img src="/img/person.svg" alt="icon" className="img ml-md-2 user-icon" height="25" width="25" />
                                <div className="d-none flex-column d-md-flex justify-content-center align-items-center mx-4">
                                    <span className="d-flex position-relative name"> Franck Duval </span>
                                    <span className="d-flex position-relative pseudo"> @franck_duval </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0 py-4 d-flex flex-row justify-content-start align-items-start content-fomation-item pt-5">
                    <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3">
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
                    <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3"></div>
                </div>
                <div className="container-fluid m-0 p-0 py-3 d-flex flex-column justify-content-center align-items-center rounded end-of-page">
                    <span> Plus aucun item. </span>
                </div>
            </div>
        </Fragment>
    );
};

Formation.page = page;