import { Fragment } from 'react';
import { page } from './../[needed]';
import Head from 'next/head';
import { GameBody } from './../../@game';

export default function SearchWord () {
    return (
        <Fragment>
            <Head>
                <script src="/script/canvas.js"></script>
                <link rel="stylesheet" href="/css/game.css"/>
            </Head>
            <div className="container-fluid main-container position-relative h-100 d-none">
                <GameBody
                    canvas={ true }
                    title="Chercher les mots"
                    name="vérifier"
                    gameInfos={ function () {
                        return (
                            <Fragment>
                                <span className="py-2"> Le but est de trouver les mots de la liste. </span>
                                <span className="ml-4"> - Pour cela il suffit d'abord de trouver les mots dans la grille. </span>
                                <span className="ml-4"> - Puis relier les mots en faisant un trait dessus.  </span>
                                <span className="ml-4"> - Après avoir trouvé tous les mots cliquer sur vérifier, puis sur suivant pour continuer.  </span>
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

SearchWord.page = page;
SearchWord.scripts = [ 
    '/script/extends/search-word.api.js',
    '/script/extends/search-word.js' 
];