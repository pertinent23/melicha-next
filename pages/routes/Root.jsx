import Head from 'next/head';
import { Fragment } from 'react';
import { element, string } from 'prop-types';
import Navigation from './@navigation';

export const TITLE = 'Computer Manipulating App';
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Root( { children, page } ) {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#775FD7"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" type="text/css" href="/libs/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
                <title> { TITLE } </title>
                <link rel="icon" href="/img/sicon.png" type="image/png" />
                <script src="/libs/jquery-3.3.1.slim.min.js"></script>
                <script src="/libs/popper.min.js"></script>
                <script src="/libs/digital-v2.0.0.min.js"></script>
                <script src="/libs/chart.min.js"></script>
            </Head>
            <div className="cover-container h-100 w-100 d-flex flex-column main justify-content-center align-items-center">
                <div className="previous-data d-flex flex-column position-absolute h-100 w-100">
                    <span className="start d-flex w-100"></span>
                    <div className="end d-flex w-100"></div>
                </div>
                <div className="container-fluid row d-flex flex-row p-0 m-0 h-100 main-row">
                    <div className="col-0 col-md-4 col-lg-3 p-0 menu-column h-auto">
                        <Navigation page={ page } />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 p-0 h-100 main-column bg-light" id="root">
                        <div className="container-fluid content-loader d-flex justify-content-center align-items-center h-100">
                            <div className="loader"></div>
                        </div>
                        { children }
                    </div>
                </div>
            </div>
            <script src="/libs/bootstrap.bundle.min.js"></script>
            <script src="/script/main.js"></script>
            <script src="/script/randIn.js"></script>
            <script src="/script/tools.js"></script>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            data: { }
        }
    };
};

Root.propTypes = {
    children: element,
    page: string
};