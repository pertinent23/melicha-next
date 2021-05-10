import { Fragment } from 'react';
import { page } from './../[needed]';
import Head from 'next/head';
import { GameBody } from './../../@game';

export default function FindWord ( ) {
    return (
        <Fragment>
            <Head>
                <script src="/script/canvas.js"></script>
                <link rel="stylesheet" href="/css/game.css"/>
            </Head>
            <div className="container-fluid main-container position-relative h-100 d-none">
                <GameBody
                    canvas={ false }
                    title="Trouver le mot"
                    name="vérifier"
                    gameInfos={ function () {
                        return (
                            <Fragment>
                                <span className="py-2"> Le but est de trouver le mot manquant dans la phrase. </span>
                                <span className="ml-4"> - Entrer le mot dans le champ suivant la phrase. </span>
                                <span className="ml-4"> - Dès que vous avez finit clique sur "vérifier" pour connaitre votre résultat </span>
                                <span className="ml-4"> - Puis cliquer sur "suivant" pour continuer. </span>
                            </Fragment>
                        );
                    } }
                >
                    <div className="container-fluid list-group table my-5 mx-0 px-3 border rounded">
                        <div className="row py-4">
                            <div className="col-9 col-title"> Phrases: </div>
                            <div className="col-3">
                                <span> Mots </span>
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-1"> 1. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <input type="text" name="q-1" id="q-1" className="input q-1 position-relative w-100 border rounded px-2 py-2" placeholder="Resultat:" />
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-2"> 2. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <input type="text" name="q-2" id="q-2" className="input q-2 position-relative w-100 border rounded px-2 py-2" placeholder="Resultat:" />
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-3"> 3. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <input type="text" name="q-3" id="q-3" className="input q-3 position-relative w-100 border rounded px-2 py-2" placeholder="Resultat:" />
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-4"> 4. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <input type="text" name="q-4" id="q-4" className="input q-4 position-relative w-100 border rounded px-2 py-2" placeholder="Resultat:" />
                            </div>
                        </div>
                        <div className="row d-flex flex-row align-items-center border-top pb-2">
                            <div className="col-9">
                                <div className="list-group-item main-list-item border-0 py-3 prop-item" data-result="q-5"> 5. </div>
                            </div>
                            <div className="col-3 border-left h-100">
                                <input type="text" name="q-5" id="q-5" className="input q-5 position-relative w-100 border rounded px-2 py-2" placeholder="Resultat:" />
                            </div>
                        </div>
                    </div>
                </GameBody>
            </div>
        </Fragment>
    );
};

FindWord.page = page;
FindWord.scripts = [ '/script/extends/find-word.js' ];