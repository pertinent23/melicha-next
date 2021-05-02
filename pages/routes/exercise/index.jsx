import Head from 'next/head';
import { Fragment } from 'react';
import Header from './../@header';

export const page = "exercise";
export default function Exercise ( ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/exercise.css"/>
            </Head>
            <div className="container-fluid main-container h-100">
                <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <Header title={ "Exercice" } />
                </div>
                <div className="container-fluid p-0 py-4 d-flex flex-row justify-content-center align-items-center content-exercise-item pt-5 mb-5">
                    <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                        <span>
                            <span className="badge badge-light mr-1"> Q </span>
                            CM
                        </span>
                        <span className="position-absolute rounded button"> commencer </span>
                    </div>
                    <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                        <span>
                            <span className="badge badge-light mr-1"> T </span>
                            rouver les mots maquant.
                        </span>
                        <span className="position-absolute rounded button"> commencer </span>
                    </div>
                    <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                        <span>
                            <span className="badge badge-light mr-1"> G </span>
                            lisser déposer.
                        </span>
                        <span className="position-absolute rounded button"> commencer </span>
                    </div>
                    <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                        <span>
                            <span className="badge badge-light mr-1"> M </span>
                            ots croisés
                        </span>
                        <span className="position-absolute rounded button"> commencer </span>
                    </div>
                    <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                        <span>
                            <span className="badge badge-light mr-1"> R </span>
                            elier les cartes.
                        </span>
                        <span className="position-absolute rounded button"> commencer </span>
                    </div>
                    <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                        <span>
                            <span className="badge badge-light mr-1"> C </span>
                            hercher les mots.
                        </span>
                        <span className="position-absolute rounded button"> commencer </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Exercise.page = page;