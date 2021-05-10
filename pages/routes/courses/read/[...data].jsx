import Head from 'next/head';
import { Fragment } from 'react';
import { page } from './../[formation]';
import Header from './../../@header';

export default function ReadCourses ( { formation, course } ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/courses.css"/>
            </Head>
            <Head>
                <link rel="stylesheet" href="/css/extends/courses.css"/>
            </Head>
            <div className="container-fluid main-container h-100 d-none px-0">
                <div className="container-fluid content-icon position-absolute d-flex h-100 w-100 justify-content-center align-items-center">
                    <img src="/img/myClass.svg" alt="icon" className="img img-responsive"/>
                </div>
                <div className="container-fluid content-page">
                    <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                        <Header title={ formation } />
                    </div>
                    <div className="container-fluid d-flex flex-row justify-content-center align-items-start content-fomation-item p-0 py-5">
                        { course }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

ReadCourses.page = page;

export async function getServerSideProps( context ) {
    const
        { data } = context.query,
        formation = data[ 0 ],
        course = data[ 1 ];
    return {
        props: {
            formation: formation,
            course: course
        }
    };
};