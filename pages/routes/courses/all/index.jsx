import Head from 'next/head';
import { Fragment } from 'react';
import Header from './../../@header';
import { page } from '../[formation]';

export const Contents = {
    generate: function ( list ) {
        const result = {};
            for ( let formation in list ) {
                const sublist = list[ formation ];
                    result[ formation ] = [];
                    for( const item of sublist ) 
                        result[ formation ].push( 
                            this.getItem( item, formation )
                        );
            }
        return (
            <Fragment>
                {
                    ( function ( data ) {
                        const result = [ ];
                            for ( let formation in data ) {
                                const list = data[ formation ];
                                    result.push(
                                        <Fragment key={ formation }>
                                            <div className="container py-0 my-0 position-relative courses-title mt-5 mb-4">  { formation } </div>
                                            <div className="container-fluid p-0 pb-2 d-flex flex-row justify-content-center align-items-start content-fomation-item mb-5">
                                                { list }
                                            </div>
                                        </Fragment>
                                    );
                            }
                        return result;
                    } )( result )
                }
            </Fragment>
        );
    },
    getItem: function ( course, formation ) {
        return (
            <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 mr-lg-5 mb-3" key={ course.name.concat( formation ) }>
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

export default function AllCourses ( { list } ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/courses.css"/>
            </Head>
            <div className="container-fluid main-container h-100 d-none px-0">
                <div className="container-fluid content-icon position-absolute d-flex h-100 w-100 justify-content-center align-items-center">
                    <img src="/img/myClass.svg" alt="icon" className="img img-responsive"/>
                </div>
                <div className="container-fluid content-page pb-4">
                    <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                        <Header title={ "Tous les cours" } />
                    </div>
                    { Contents.generate( list ) }
                </div>
            </div>
        </Fragment>
    );
};

AllCourses.page = page;
AllCourses.scripts = [ '/script/extends/courses.js' ];

export async function getServerSideProps() {
    const 
        result = {};
        result.hardware = [ {
            name: 'cours 1',
            description: 'Une courte description du cour.'
        }, {
            name: 'cours 2',
            description: 'Une courte description du cour.'
        } ];

        result.software = [ {
            name: 'cours 1',
            description: 'Une courte description du cour.'
        }, {
            name: 'cours 2',
            description: 'Une courte description du cour.'
        } ];
    return {
        props: {
            list: result
        }
    };
};