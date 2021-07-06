import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Nav from './../@nav';

export const page = 'admin.add.formation';
export default function AddFormation( ) {
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
                    <div className="form d-flex flex-column justify-content-center align-items-center py-5">
                        <input type="file" name="file" id="file" className="d-none"/>
                        <label htmlFor="file" className="d-block position-relative py-3">
                            <div className="content-img rounded-circle border d-inline-block position-relative">
                                <img src="/img/person.svg" alt="icon" className="d-inline-block position-absolute"/>
                            </div>
                        </label>
                        <div className="content-field py-5">
                            <input type="text" name="formation-name" id="formation-name" placeholder="Nom de la formation:"/>
                        </div>
                        <div className="content-field p-3">
                            <textarea name="formation-description" id="formation-description" cols="50" rows="5" placeholder="Description" class="p-2"></textarea>
                        </div>
                        <div className="content-submit pt-4">
                            <input type="button" value="Créer" id="submit"/>
                        </div>
                    </div>
                    <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-4">
                        <div className="list-group container">
                            <a href="/admin/add-game/qcm" className="list-group-item game-items py-4"> 1. </a>
                            <a href="/admin/add-game/qcm" className="list-group-item game-items py-4"> 2. </a>
                            <a href="/admin/add-game/qcm" className="list-group-item game-items py-4"> 3. </a>
                        </div>
                        <div className="container-fluid d-flex justify-content-end pt-5 mt-5 pb-3">
                            <input type="button" value="Rentrer" className="btn px-5 py-2" id="back-button" onClick={ route.back }/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};