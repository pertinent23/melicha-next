import { Fragment } from 'react';
import { page } from './../[needed]';
import Head from 'next/head';
import { GameBody } from './../../@game';

export default function CrossedWord ( ) {
    return (
        <Fragment>
            <Head>
                <script src="/script/canvas.js"></script>
                <link rel="stylesheet" href="/css/game.css"/>
            </Head>
            <div className="container-fluid main-container position-relative h-100 d-none">
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
                <GameBody
                    canvas={ true }
                    title="Mots fléchés"
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
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4 border-top-0"> 1. </div>
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4"> 2. </div>
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4"> 3. </div>
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4"> 4. </div>
                        <div className="list-group-item main-list-item border-left-0 border-right-0 py-2 pt-4"> 5. </div>
                    </div>
                </GameBody>
            </div>
        </Fragment>
    );
};

CrossedWord.page = page;
CrossedWord.scripts = [ '/script/extends/crossed-word.js' ];