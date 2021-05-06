import Head from 'next/head';
import { Fragment } from 'react';
import { page } from './../[formation]';

export default function ReadCourses ( { formation, course } ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/courses.css"/>
            </Head>
            <div> { formation } </div>
            <div> { course } </div>
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