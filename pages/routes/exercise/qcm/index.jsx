import { Fragment } from 'react';
import { page } from './../[needed]';
import Head from 'next/head';
import { GameBody } from './../../@game';

export default function QCM () {
    return (
        <Fragment>
            <Head>
                <script src="/script/canvas.js"></script>
                <link rel="stylesheet" href="/css/game.css"/>
            </Head>
            <div className="container-fluid main-container position-relative h-100 d-none">
                <GameBody
                    canvas={ false }
                    title="QCM"
                    name="vérifier"
                    gameInfos={ function () {
                        return (
                            <Fragment>
                                <span className="py-2"> Le but est de déterminer si chaque question est vrai ou fausse. </span>
                                <span className="ml-4"> - Choisir la valeur de vérité en cochant à la suite de chaque question </span>
                                <span className="ml-4"> - Dès que vous avez finit clique sur "vérifier" pour connaitre votre résultat </span>
                                <span className="ml-4"> - Puis cliquer sur "suivant" pour continuer. </span>
                            </Fragment>
                        );
                    } }
                >
                    <div className="container-fluid list-group table my-5 mx-0 px-3 border rounded">
                        <div className="row py-4">
                            <div className="col-9 col-title"> Questions: </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6 col-title"> Vrai </div>
                                    <div className="col-6 col-title"> Faux </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-1"> 1. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="radio" name="q-1" value="true" className="radio q-1"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="radio" name="q-1" value="false" className="radio q-1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-2"> 2. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="radio" name="q-2" value="true" className="radio q-2"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="radio" name="q-2" value="false" className="radio q-2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-3"> 3. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="radio" name="q-3" value="true" className="radio q-3"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="radio" name="q-3" value="false" className="radio q-3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-4"> 4. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="radio" name="q-4" value="true" className="radio q-4"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="radio" name="q-4" value="false" className="radio q-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-5"> 5. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="radio" name="q-5" value="true" className="radio q-5"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="radio" name="q-5" value="false" className="radio q-5"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </GameBody>
            </div>
        </Fragment>
    );
};

QCM.page = page;
QCM.scripts = [ '/script/extends/qcm.js' ];