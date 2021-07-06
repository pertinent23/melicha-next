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
                                <span className="py-2"> Le but du jeux est de remplire les vides à l'aide des mots proposés. </span>
                                <span className="ml-4"> - Pour remplire une colone il suffit de cliquer sur son identifiant </span>
                                <span className="ml-4"> - Pour effacer le contenu d'une colone il suffit de cliquer sur son identifiant une seconde foi.  </span>
                                <span className="ml-4"> - Après avoir fini de remplir, cliquer sur suivant pour continuer.  </span>
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