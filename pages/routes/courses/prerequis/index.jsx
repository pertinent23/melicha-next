import Head from 'next/head';
import { Fragment } from 'react';
import { page } from './../[formation]';
import Header from './../../@header';

export default function Prerequis () {
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
                        <Header title={ "Prerequis" } />
                    </div>
                    <div className="container-fluid d-flex flex-column justify-content-center align-items-start p-0 py-5">
                        <div className="prerequis w-100">
                            <div className="start py-4 pl-4"> Prerequis: </div>
                            <div className="end">
                                <div className="list-group border-0">
                                    <div className="list-group-item border-top-0 border-right-0 border-left-0 py-4 pl-3 pl-sm-4 pl-md-5">
                                        <div className="row">
                                            <div className="col content-question">
                                                Question 1?
                                            </div>
                                            <div className="col-3 col-sm-2 col-md-1 d-flex align-items-center content-question-answer">
                                                Vrai
                                                <input type="radio" name="r1" value="true" className="mx-2" />
                                            </div>
                                            <div className="col-3 col-sm-2 col-md-1 d-flex align-items-center content-question-answer">
                                                Faux
                                                <input type="radio" name="r1" value="false" className="mx-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item border-top-0 border-right-0 border-left-0 py-4 pl-3 pl-sm-4 pl-md-5">
                                        <div className="row">
                                            <div className="col content-question">
                                                Question2 ?
                                            </div>
                                            <div className="col-3 col-sm-2 col-md-1 d-flex align-items-center content-question-answer">
                                                Vrai
                                                <input type="radio" name="r2" value="true" className="mx-2" />
                                            </div>
                                            <div className="col-3 col-sm-2 col-md-1 d-flex align-items-center content-question-answer">
                                                Faux
                                                <input type="radio" name="r2" value="false" className="mx-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item border-top-0 border-right-0 border-left-0 py-4 pl-3 pl-sm-4 pl-md-5">
                                        <div className="row">
                                            <div className="col content-question">
                                                Question3 ?
                                            </div>
                                            <div className="col-3 col-sm-2 col-md-1 d-flex align-items-center content-question-answer">
                                                Vrai
                                                <input type="radio" name="r3" value="true" className="mx-2" />
                                            </div>
                                            <div className="col-3 col-sm-2 col-md-1 d-flex align-items-center content-question-answer">
                                                Faux
                                                <input type="radio" name="r3" value="false" className="mx-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item border-top-0 border-right-0 border-left-0 py-4 pl-3 pl-sm-4 pl-md-5">
                                        <div className="row">
                                            <div className="col content-question">
                                                Question4 ?
                                            </div>
                                            <div className="col-3 col-sm-2 col-md-1 d-flex align-items-center content-question-answer">
                                                Vrai
                                                <input type="radio" name="r4" value="true" className="mx-2" />
                                            </div>
                                            <div className="col-3 col-sm-2 col-md-1 d-flex align-items-center content-question-answer">
                                                Faux
                                                <input type="radio" name="r4" value="false" className="mx-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-button d-flex justify-content-end pr-3 py-3">
                                    <div className="btn verify px-4 py-2" id="verifier"> Verifier </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid retenons py-5 text-center"> Repondez à toutes les questions pour vérifier votre nniveau. </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Prerequis.page = page;
Prerequis.scripts = [
    "/script/extends/prerequis.js"
];