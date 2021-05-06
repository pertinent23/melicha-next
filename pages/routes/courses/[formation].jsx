import Head from 'next/head';
import { Fragment } from 'react';
import Header from './../@header';

export const Contents = {
    generate: function ( list, formation ) {
        const result = [ ];
            for( const item of list ) 
                result.push( 
                    this.getItem( item, formation )
                );
        return result;
    },
    getItem: function ( course, formation ) {
        return (
            <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mr-lg-4 mb-5" key={ course.name }>
                <div className="container d-flex justify-content-between start py-3">
                    <div className="item-title"> { course.name } </div>
                    <div className="item-icon rounded d-flex justify-content-center align-items-center">
                        { course.name[ 0 ] }
                    </div>
                </div>
                <div className="item-text px-4">
                    { course.description }
                </div>
                <div className="container d-flex justify-content-end start pr-4">
                    <button 
                        className="btn rounded mb-4" 
                        data-course={ course.name }
                        data-formation={ formation }
                    > lire </button>
                </div>
            </div>
        );
    }
};

export const page = "courses";
export default function Courses ( { formation, list } ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/courses.css"/>
            </Head>
            <div className="container-fluid main-container h-100 d-none">
                <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                    <Header title={ formation } />
                </div>
                <div className="container-fluid d-flex flex-row justify-content-center align-items-start content-fomation-item p-0 py-5">
                    { Contents.generate( list, formation ) }
                </div>
            </div>
        </Fragment>
    );
};

Courses.page = page;
Courses.scripts = [ '/script/extends/courses.js' ];

export async function getServerSideProps( context ) {
    const
        result = [ ], 
        { formation } = context.query;
            result.push( {
                name: 'Cour 1',
                description: 'Une courte description du cour.'
            } );
            result.push( {
                name: 'Cour 2',
                description: 'Une courte description du cour.'
            } ); 
    return {
        props: {
            list: result,
            formation: formation
        }
    };
};