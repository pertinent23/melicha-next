import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Nav from './../@nav';

export const page = 'admin.home';
export default function Home( ) {
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
                    <div className="container-fluid d-flex content-home-items justify-content-center align-items-center py-4">
                        <div className="home-item d-flex flex-column shadow m-2">
                            <div className="home-item-title py-3 pl-4 d-block">
                                <span className="home-item-text d-block"> Ajouter une formation </span>
                            </div>
                            <div className="home-item-content position-relative d-flex flex-column justify-content-center align-items-center">
                                <a href="/admin/add-formation">
                                    <div className="home-item-icon position-relative d-flex justify-content-center align-items-center">
                                        <div className="items item1 position-absolute d-block"></div>
                                        <div className="items item2 position-absolute d-block"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="home-item d-flex flex-column shadow m-2">
                            <div className="home-item-title py-3 pl-4 d-block">
                                <span className="home-item-text d-block"> Ajouter un cours </span>
                            </div>
                            <div className="home-item-content position-relative d-flex flex-column justify-content-center align-items-center">
                                <a href="/admin/add-course">
                                    <div className="home-item-icon position-relative d-flex justify-content-center align-items-center">
                                        <div className="items item1 position-absolute d-block"></div>
                                        <div className="items item2 position-absolute d-block"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="home-item d-flex flex-column shadow m-2">
                            <div className="home-item-title py-3 pl-4 d-block">
                                <span className="home-item-text d-block"> Ajouter des exercices </span>
                            </div>
                            <div className="home-item-content position-relative d-flex flex-column justify-content-center align-items-center">
                                <a href="/admin/add-game">
                                    <div className="home-item-icon position-relative d-flex justify-content-center align-items-center">
                                        <div className="items item1 position-absolute d-block"></div>
                                        <div className="items item2 position-absolute d-block"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};