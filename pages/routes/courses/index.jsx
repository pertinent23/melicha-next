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
            <div class="container-fluid main-container h-100">
                <div class="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <Header title={ "Mes cours" } />
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