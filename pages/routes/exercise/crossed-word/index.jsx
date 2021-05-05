import { Fragment } from 'react';
import { page } from './../[needed]';
import Head from 'next/head';
import Header from './../../@header';

export default function CrossedWord ( ) {
    return (
        <Fragment>
            <Head>
                <script src="/script/canvas.js"></script>
                <link rel="stylesheet" href="/css/game.css"/>
            </Head>
            <div className="container-fluid main-container position-relative h-100">
                <div className="container-fluid api api-items p-0">
                    <div className="container-fluid d-flex position-relative justify-content-center align-items-center p-0">
                        <div className="d-flex position-relative flex-column api-list border rounded">
                            <div className="container-fluid border-bottom mb-2 py-4 api-title">
                                Choisir une option
                            </div>
                            <div className="container-fluid list-group px-3 pb-3">
                                <div className="list-group-item api-list-item border-left-0 border-right-0 py-2 pt-4 border-top-0"> 1. </div>
                                <div className="list-group-item api-list-item border-left-0 border-right-0 py-2 pt-4"> 2. </div>
                                <div className="list-group-item api-list-item border-left-0 border-right-0 py-2 pt-4"> 3. </div>
                                <div className="list-group-item api-list-item border-left-0 border-right-0 py-2 pt-4"> 4. </div>
                                <div className="list-group-item api-list-item border-left-0 border-right-0 py-2 pt-4 border-bottom-0"> 5. </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <Header title={ "Mots flechés" } />
                </div>
                <div className="container-fluid p-0 py-4 d-flex flex-column justify-content-center align-items-center content-exercise-item pt-5 mb-5">
                    <div className="container-fluid">
                        <div className="container-fluid postion-relative d-flex flex-column game-infos py-4 rounded" role="alert">
                            <span> Le but du jeux est de remplire les vides à l'aide des mots proposé. </span>
                            <span className="ml-4"> - Pour remplire une colone il suffit de cliquer sur son identifiant </span>
                            <span className="ml-4"> - Pour effacer le contenu d'une colone il suffit de cliquer sur son identifiant une seconde foi.  </span>
                        </div>
                        <div className="container-fluid list-group">
                            <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4 border-top-0"> 1. </div>
                            <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4"> 2. </div>
                            <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4"> 3. </div>
                            <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4"> 4. </div>
                            <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4"> 5. </div>
                        </div>
                    </div>
                    <div className="container-fluid d-flex position-relative justify-content-center py-5">
                        <canvas id="myCanvas" width="550" height="400" className="d-block position relative border"></canvas>
                    </div>
                    <div className="container-fluid content-next-button d-flex position-relative justify-content-end pb-4">
                        <button id="next-button"> Suivant </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

CrossedWord.page = page;
CrossedWord.scripts = [ '/script/extends/crossed-word.js' ];