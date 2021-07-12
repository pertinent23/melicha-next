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
                    title="Classer les cartes"
                    name="vérifier"
                    gameInfos={ function () {
                        return (
                            <Fragment>
                                <span className="py-2"> Le but du jeux est de determner le processus et classer ses étapes. </span>
                                <span className="ml-4"> - Clique sur monter et descendre pour reclasser les étapes </span>
                                <span className="ml-4"> - Appuyez sur verifier dès que vous aurez fini.  </span>
                            </Fragment>
                        );
                    } }
                >
                    <div className="container-fluid list-group">
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4 border-top-0">
                            <div className="row">
                                <div className="col-2">
                                    <button className="up"> Monter </button>
                                    <button className="down"> Descendre </button>
                                </div>
                                <div className="col border-left ml-3 content-data d-flex jusitfy-content-center align-items-center"> data1 </div>
                            </div>
                        </div>
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4">
                            <div className="row">
                                <div className="col-2">
                                    <button className="up"> Monter </button>
                                    <button className="down"> Descendre </button>
                                </div>
                                <div className="col border-left ml-3 content-data d-flex jusitfy-content-center align-items-center"> data1 </div>
                            </div>
                        </div>
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4">
                            <div className="row">
                                <div className="col-2">
                                    <button className="up"> Monter </button>
                                    <button className="down"> Descendre </button>
                                </div>
                                <div className="col border-left ml-3 content-data d-flex jusitfy-content-center align-items-center"> data1 </div>
                            </div>
                        </div>
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4">
                            <div className="row">
                                <div className="col-2">
                                    <button className="up"> Monter </button>
                                    <button className="down"> Descendre </button>
                                </div>
                                <div className="col border-left ml-3 content-data d-flex jusitfy-content-center align-items-center"> data1 </div>
                            </div>
                        </div>
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4">
                            <div className="row">
                                <div className="col-2">
                                    <button className="up"> Monter </button>
                                    <button className="down"> Descendre </button>
                                </div>
                                <div className="col border-left ml-3 content-data d-flex jusitfy-content-center align-items-center"> data1 </div>
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
    '/script/extends/class-card.js'
];