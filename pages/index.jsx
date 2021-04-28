import Head from 'next/head';
import { Fragment } from 'react';

export const page = 'home';
export default function Home() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/home.css"/>
            </Head>
            <div className="container-fluid main-container h-100">
                <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <div className="container-fluid row d-flex align-items-center p-0 mt-4">
                        <div className="col col-lx-2 align-items-end d-none d-lg-flex h-100">
                            <h3 className="text-left text-dark text-align-baseline"> Bienvenue!! </h3>
                        </div>
                        <div className="col col-lx-6 p-0 px-3">
                            <div className="container ml-lg-0 input-group search-space d-flex justify-content-center align-items-center px-1 pl-2">
                                <input type="text" name="search" id="search" className="form-control search-field" placeholder="Recherche:" />
                                <div className="input-group-append d-flex position-relative justify-content-center align-items-center h-100">
                                    <img src="./img/search.svg" alt="search" className="img d-block position-relative" height="20" width="20" />
                                </div>
                            </div>
                        </div>
                        <div className="col-2 col-md-4 col-lg-3 p-0 px-2 d-flex justify-content-center">
                            <div className="d-flex position-relative justify-content-center align-items-center user-icon-container p-1 shadow">
                                <img src="./img/person.svg" alt="icon" className="img ml-md-2 user-icon" height="25" width="25" />
                                <div className="d-none flex-column d-md-flex justify-content-center align-items-center mx-4">
                                    <span className="d-flex position-relative name"> Franck Duval </span>
                                    <span className="d-flex position-relative pseudo"> @franck_duval </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid row p-0 m-0 py-3">
                    <div className="container text-left mt-4"> Dashboard </div>
                </div>
                <div className="container-fluid row p-0 py-3 m-0 d-flex align-items-center banner rounded">
                    <div className="col col-lg-6 container-fluid p-0 m-0">
                        <div className="container carousel slide rounded" id="diaporama" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#diaporama" data-slide-to="0" className="active"></li>
                                <li data-target="#diaporama" data-slide-to="1"></li>
                                <li data-target="#diaporama" data-slide-to="2"></li>
                                <li data-target="#diaporama" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./img/img1.jpg" alt="img" className="img banner-img d-block w-100" />
                                    <div className="carousel-caption">
                                        <h6 className="text-light"> Souris </h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/img2.jpg" alt="img" className="img banner-img d-block w-100" />
                                    <div className="carousel-caption">
                                        <h6 className="text-light"> Souris noire </h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/img3.jpg" alt="img" className="img banner-img d-block w-100" />
                                    <div className="carousel-caption">
                                        <h6 className="text-light"> Ordinateur </h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/img4.jpg" alt="img" className="img banner-img d-block w-100" />
                                    <div className="carousel-caption">
                                        <h6 className="text-light"> Clavier </h6>
                                    </div>
                                </div>
                            </div>
                            <a href="#diaporama" className="carousel-control-prev carousel-button" data-slide="prev" role="button">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only"> Prev </span>
                            </a>
                            <a href="#diaporama" className="carousel-control-next carousel-button" data-slide="next" role="button">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only"> Next </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 container-fluid p-0 m-0">
                        <div className="container rounded">
                            <div className="container rounded">
                                <img src="./img/banner-img2.svg" className="img container img-fluid banner-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid row p-0 m-0 py-3 mb-5">
                    <div className="col col-lg-6 container-fluid p-0 m-0">
                        <div className="container py-3">
                            <div className="dashboard-title text-dark"> Formation </div>
                        </div>
                        <div className="container rounded">
                            <div className="container rounded formation-container py-3 px-0">
                                <div className="container formation-item d-flex flex-column justify-content-around align-items-center px-4 mt-2 unstart">
                                    <span className="line_1 d-flex position-relative container-fluid justify-content-between align-items-center m-0 p-0">
                                        <span className="badge d-flex justify-content-center align-items-center"> H </span>
                                        <span className="text"> Hardware </span>
                                    </span>
                                    <span className="line_2 d-flex position-relative container-fluid justify-content-end align-items-center m-0 p-0 px-3 description">
                                        Une petite description de la formation et des éléments qui s'y raportent.
                                    </span>
                                    <span className="line_3 d-flex position-relative container-fluid justify-content-end align-items-center m-0 p-0">
                                        <button className="btn px-3"> Conmmencer </button>
                                    </span>
                                </div>
                                <div className="container formation-item d-flex flex-column justify-content-around align-items-center px-4 mt-2 start">
                                    <span className="line_1 d-flex position-relative container-fluid justify-content-between align-items-center m-0 p-0">
                                        <span className="badge d-flex justify-content-center align-items-center"> S </span>
                                        <span className="text"> Software </span>
                                    </span>
                                    <span className="line_2 d-flex position-relative container-fluid justify-content-end align-items-center m-0 p-0 px-3 description">
                                        Une petite description de la formation et des éléments qui s'y raportent.
                                    </span>
                                    <span className="line_3 d-flex position-relative container-fluid justify-content-end align-items-center m-0 p-0">
                                        <button className="btn px-3"> continuer </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 container-fluid p-0 m-0 pb-5">
                        <div className="container py-3">
                            <div className="dashboard-title text-dark"> Statistique </div>
                        </div>
                        <div className="container rounded pt-4">
                            <div className="container rounded stat-container py-3">
                                <div className="container-fluid p-0 m-0 d-flex justify-content-between">
                                    Progression Mensuelle
                                    <figure className="figure">
                                        <img src="./img/calendar.svg" alt="icon" className="img figure-img" height="25" width="25" />
                                    </figure>
                                </div>
                                <canvas className="container" height="100" id="chart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="/script/extends/home.js"></script>
        </Fragment>
    );
};

Home.page = page;