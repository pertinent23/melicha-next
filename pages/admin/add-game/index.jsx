import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Nav from './../@nav';

export const page = 'admin.add.game';
export default function AddGame( ) {
    const 
        route = useRouter(),
        url = route.pathname;
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/admin.css"/>
            </Head>
            <div className="container-fluid main-container h-100 d-none px-0">
                <div className="container-fluid px-0 d-flex flex-column pb-5">
                    <Nav url={ url } backFx={ route.back }/>
                    <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-4">
                        <div className="list-group container">
                            <a href="/admin/add-game/qcm" className="list-group-item game-items py-4"> 1. Qcm </a>
                            <a href="/admin/add-game/find-word" className="list-group-item game-items py-4"> 2. Trouver le mot </a>
                            <a href="/admin/add-game/drag-and-drop" className="list-group-item game-items py-4"> 3. Glisser déposer </a>
                            <a href="/admin/add-game/crossed-word" className="list-group-item game-items py-4"> 4. Mots croisés </a>
                            <a href="/admin/add-game/search-word" className="list-group-item game-items py-4"> 5. Chercher le mot </a>
                        </div>
                        <div className="container-fluid d-flex justify-content-end pt-5 mt-5">
                            <input type="button" value="Rentrer" className="btn px-5 py-2" id="back-button" onClick={ route.back }/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};