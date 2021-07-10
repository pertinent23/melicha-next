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
                                <span className="py-2"> Le but du jeux est de remplire les vides à l'aide des mots proposés. </span>
                                <span className="ml-4"> - Pour remplire une colone il suffit de cliquer sur son identifiant </span>
                                <span className="ml-4"> - Pour effacer le contenu d'une colone il suffit de cliquer sur son identifiant une seconde foi.  </span>
                                <span className="ml-4"> - Après avoir fini de remplir, cliquer sur suivant pour continuer.  </span>
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