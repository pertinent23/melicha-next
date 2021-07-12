import { Fragment } from 'react';
import { page } from './../[needed]';
import Head from 'next/head';
import { GameBody } from './../../@game';

export default function ShutDown ( ) {
    return (
        <Fragment>
            <Head>
                <script src="/script/canvas.js"></script>
                <link rel="stylesheet" href="/css/game.css"/>
            </Head>
            <div className="container-fluid main-container position-relative h-100 d-none">
                <GameBody
                    canvas={ true }
                    title="Allumer et eteindre l'ordinateur"
                    name="vérifier"
                    gameInfos={ function () {
                        return (
                            <Fragment>
                                <span className="py-2"> Le but de cette simulation est de Montrer la procédure d'allumage d'un ordinateur donc pour la mener à bien: </span>
                                <span className="ml-4"> - Lancer l'unité centrale de votre ordinateur. </span>
                                <span className="ml-4"> - Puis lancer l'écran.  </span>
                            </Fragment>
                        );
                    } }
                >
                </GameBody>
            </div>
        </Fragment>
    );
};

ShutDown.page = page;
ShutDown.scripts = [
    "/script/extends/shut-down.js"
];