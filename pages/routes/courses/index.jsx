import Head from 'next/head';
import { Fragment } from 'react';

export const page = "courses";
export default function Courses ( ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/courses.css"/>
            </Head>
            <div class="container-fluid main-container h-100">
                <div class="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <div class="container-fluid row d-flex align-items-center p-0 mt-4">
                        <div class="col col-lx-2 align-items-end d-none d-lg-flex h-100">
                            <h3 class="text-left text-dark text-align-baseline"> Mes cours </h3>
                        </div>
                        <div class="col col-lx-6 p-0 px-3">
                            <div class="container ml-lg-0 input-group search-space d-flex justify-content-center align-items-center px-1 pl-2">
                                <input type="text" name="search" id="search" class="form-control search-field" placeholder="Recherche:" />
                                <div class="input-group-append d-flex position-relative justify-content-center align-items-center h-100">
                                    <img src="/img/search.svg" alt="search" class="img d-block position-relative" height="20" width="20" />
                                </div>
                            </div>
                        </div>
                        <div class="col-2 col-md-4 col-lg-3 p-0 px-2 d-flex justify-content-center">
                            <div class="d-flex position-relative justify-content-center align-items-center user-icon-container p-1 shadow">
                                <img src="/img/person.svg" alt="icon" class="img ml-md-2 user-icon" height="25" width="25" />
                                <div class="d-none flex-column d-md-flex justify-content-center align-items-center mx-4">
                                    <span class="d-flex position-relative name"> Franck Duval </span>
                                    <span class="d-flex position-relative pseudo"> @franck_duval </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid p-0 py-4 d-flex flex-row justify-content-center align-items-center content-fomation-item pt-5">
                    <div class="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mb-4">
                        <div class="container d-flex justify-content-between start py-3">
                            <div class="item-title"> Cour 1 </div>
                            <div class="item-icon rounded d-flex justify-content-center align-items-center"> C </div>
                        </div>
                        <div class="item-text px-4">
                            Une courte description du cour.
                        </div>
                        <div class="container d-flex justify-content-end start pr-4">
                            <button class="btn rounded mb-4"> lire </button>
                        </div>
                    </div>
                    <div class="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mb-4">
                        <div class="container d-flex justify-content-between start py-3">
                            <div class="item-title"> Cour 2 </div>
                            <div class="item-icon rounded d-flex justify-content-center align-items-center"> C </div>
                        </div>
                        <div class="item-text px-4">
                            Une courte description du cour.
                        </div>
                        <div class="container d-flex justify-content-end start pr-4">
                            <button class="btn rounded mb-4"> lire </button>
                        </div>
                    </div>
                    <div class="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mb-4"></div>
                </div>
            </div>
        </Fragment>
    );
};

Courses.page = page;