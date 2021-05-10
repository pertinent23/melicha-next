import { Fragment } from 'react';
import { page } from './../[needed]';
import Head from 'next/head';
import { GameBody } from './../../@game';

export default function DradAndDrop ( ) {
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
                                <span className="py-2"> Le but déposser l'image appropriée dans la zone prevue à cet éffet. </span>
                                <span className="ml-4"> - porter la bonne image et ajouter la dans le cadre. </span>
                                <span className="ml-4"> - Dès que vous avez finit clique sur "vérifier" pour connaitre votre résultat </span>
                                <span className="ml-4"> - Puis cliquer sur "suivant" pour continuer. </span>
                            </Fragment>
                        );
                    } }
                >
                    <div className="container-fluid table my-5 mx-0 px-3 pb-5 border rounded">
                        <div className="row">
                            <div className="col d-flex py-4 flex-row justify-content-center">
                                <span className="container content-text w-auto"></span>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col d-flex flex-row justify-content-center">
                                <div className="box-item border rounded d-flex justify-content-center align-items-center position-relative">
                                    <div className="box-item-inner rounded position-relative d-flex main-option">
                                        { /* <div className="content-img position-relative d-flex h-100 w-100 justify-content-center align-items-center" draggable="true">
                                            <img src="/img/game.svg" alt="icon" className="img img-responsive" draggable="false" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4 border-top">
                            <div className="col d-flex flex-row justify-content-center py-3">
                                <div className="box-item border rounded d-flex justify-content-center align-items-center position-relative">
                                    <div className="box-item-inner rounded position-relative d-block content-img-option"></div>
                                </div>
                            </div>
                            <div className="col d-flex flex-row justify-content-center py-3">
                                <div className="box-item border rounded d-flex justify-content-center align-items-center position-relative">
                                    <div className="box-item-inner rounded position-relative d-block content-img-option"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col d-flex flex-row justify-content-center py-3">
                                <div className="box-item border rounded d-flex justify-content-center align-items-center position-relative">
                                    <div className="box-item-inner rounded position-relative d-block content-img-option"></div>
                                </div>
                            </div>
                            <div className="col d-flex flex-row justify-content-center py-3">
                                <div className="box-item border rounded d-flex justify-content-center align-items-center position-relative">
                                    <div className="box-item-inner rounded position-relative d-block content-img-option"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </GameBody>
            </div>
        </Fragment>
    );
};

DradAndDrop.page = page;
DradAndDrop.scripts = [ '/script/extends/drag-and-drop.js' ];