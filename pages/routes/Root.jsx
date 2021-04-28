import Head from 'next/head';
import { Fragment } from 'react';
import { element, string } from 'prop-types';
import Navigation from './@navigation';

export const TITLE = 'Melicha leaning';
export default function Root( { children, page } ) {
    return (
        <Fragment>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, max-scale=1" />
                <link rel="stylesheet" type="text/css" href="/libs/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
                <title> { TITLE } </title>
                <script src="/libs/jquery-3.3.1.slim.min.js"></script>
                <script src="/libs/popper.min.js"></script>
                <script src="/libs/digital-v2.0.0.min.js"></script>
                <script src="/libs/chart.min.js"></script>
            </Head>
            <div className="cover-container h-100 w-100 d-flex flex-column main">
                <div className="container-fluid row d-flex flex-row p-0 m-0 h-100 main-row">
                    <div className="col-0 col-md-4 col-lg-3 p-0 menu-column">
                        <Navigation page={ page } />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 p-0 h-100 main-column" id="root">
                        { children }
                    </div>
                </div>
            </div>
            <script src="/libs/bootstrap.bundle.min.js"></script>
            <script src="/script/main.js"></script>
        </Fragment>
    );
};

Root.propTypes = {
    children: element,
    page: string
};