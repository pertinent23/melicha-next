import Head from 'next/head';
import { Fragment } from 'react';
import Header from './../@header';

export const Contents = {
    generate: function ( list ) {
        const result = [ ];
            for( const item of list ) 
                result.push( 
                    this.getItem( item )
                );
        return result;
    },
    getItem: function ( __formation__ ) {
        return (
            <div className="formation-option d-flex flex-column justify-content-between shadow-lg rounded mr-3 m-lg-5 mb-4" key={ __formation__.name }>
                <div className="container d-flex justify-content-between start py-3">
                    <div className="item-title"> { __formation__.name } </div>
                    <div className="item-icon rounded d-flex justify-content-center align-items-center"> H </div>
                </div>
                <div className="item-text px-4">
                    { __formation__.description }
                </div>
                <div className="container d-flex justify-content-end start pr-4">
                    <button className="btn rounded mb-4 move-button" data-name={ __formation__.name }> commencer </button>
                </div>
            </div>
        );
    }
};

export const page = "formation";
export default function Formation ( { list } ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/formation.css"/>
            </Head>
            <div className="container-fluid main-container h-100 d-none px-0">
                <div className="container-fluid content-icon position-absolute d-flex h-100 w-100 justify-content-center align-items-center">
                    <img src="/img/formations.svg" alt="icon" className="img img-responsive"/>
                </div>
                <div className="container-fluid content-page">
                    <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                        <Header title={ "Formation" } />
                    </div>
                    <div className="container-fluid p-0 py-4 d-flex flex-row justify-content-center align-items-start content-fomation-item pt-5">
                        { Contents.generate( list ) }
                    </div>
                    <div className="container-fluid position-relative m-0 p-0 mt-5 d-flex flex-column justify-content-center align-items-center rounded end-of-page">
                        <span> ... </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Formation.page = page;
Formation.scripts = [ '/script/extends/courses.js' ];

export async function getStaticProps() {
    const result = [];
        result.push( {
            name: 'Hardware',
            description: 'la description de la formation'
        } );

        result.push( {
            name: 'Software',
            description: 'la description de la formation'
        } );
    return {
        props: { 
            list: result  
        }
    };
};