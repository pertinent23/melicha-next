import { Fragment } from 'react';
import { page } from './../[needed]';
import Head from 'next/head';
import { GameBody } from './../../@game';

export default function LinkCard () {
    return (
        <Fragment>
            <Head>
                <script src="/script/canvas.js"></script>
                <link rel="stylesheet" href="/css/game.css"/>
            </Head>
            <div className="container-fluid main-container position-relative h-100 d-none">
                <GameBody
                    canvas={ false }
                    title="Relier les cartes"
                    name="vérifier"
                    gameInfos={ function () {
                        return (
                            <Fragment>
                                <span className="py-2"> Le but du jeux est de lier les cartes </span>
                                <span className="ml-4"> - Cela se fait en cliquant sur l'une puis sur l'autre </span>
                                <span className="ml-4"> - Ensuite appuyer sur verifier </span>
                            </Fragment>
                        );
                    } }
                >
                    <div className="container-fluid pins-container py-5 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="d-flex justify-content-center align-items-center col">
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center col">
                                        <div className="pins text-center px-2"></div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center col">
                                        <div className="pins text-center px-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center col-12 col-md-6">
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center col">
                                        <div className="pins text-center px-2"></div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center col">
                                        <div className="pins text-center px-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-center align-items-center col">
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center col">
                                        <div className="pins text-center px-2"></div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center col">
                                        <div className="pins text-center px-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center col-12 col-md-6">
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center col">
                                        <div className="pins text-center px-2"></div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center col">
                                        <div className="pins text-center px-2"></div>
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

LinkCard.page = page;
LinkCard.scripts = [ 
    '/script/extends/link-card.js' 
];