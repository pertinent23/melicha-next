import Head from 'next/head';
import { Fragment } from 'react';
import Header from './../@header';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

export const page = "exercise";
export const baseUrl = "/routes/".concat( page.concat( '/' ) );

export const formUrl = ( src ) => {
    return baseUrl.concat( src );
};

export const Game = ( { src } ) => (
    dynamic( () => import( src ) )
);

export const Contents = {
    route: function ( needed ) {
        if( needed === 'index' )
            return this.index( );
        else{
            var
                parts = needed.split( '/' ),
                last = parts[ parts.length - 1 ];
            return this.game( './'.concat( last ) );
        }
    },
    index: () => {
        return (
            <Fragment>
                <Head>
                    <link rel="stylesheet" href="/css/extends/exercise.css"/>
                </Head>
                <div className="container-fluid main-container h-100 d-none">
                    <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                        <Header title={ "Exercice" } />
                    </div>
                    <div className="container-fluid p-0 py-4 d-flex flex-row justify-content-center align-items-center content-exercise-item pt-5 mb-5">
                        <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                            <span>
                                <span className="badge badge-light mr-1"> Q </span>
                                CM
                            </span>
                            <span 
                                className="position-absolute rounded button"
                                data-url={ formUrl( 'qcm' ) }
                            > commencer </span>
                        </div>
                        <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                            <span>
                                <span className="badge badge-light mr-1"> T </span>
                                rouver les mots maquant.
                            </span>
                            <span 
                                className="position-absolute rounded button"
                                data-url={ formUrl( 'find-word' ) }
                            > commencer </span>
                        </div>
                        <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                            <span>
                                <span className="badge badge-light mr-1"> G </span>
                                lisser déposer.
                            </span>
                            <span 
                                className="position-absolute rounded button"
                                data-url={ formUrl( 'drag-drop' ) }
                            > commencer </span>
                        </div>
                        <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                            <span>
                                <span className="badge badge-light mr-1"> M </span>
                                ots fléchés.
                            </span>
                            <span 
                                className="position-absolute rounded button"
                                data-url={ formUrl( 'crossed-word' ) }
                            > commencer </span>
                        </div>
                        <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                            <span>
                                <span className="badge badge-light mr-1"> R </span>
                                elier les cartes.
                            </span>
                            <span 
                                className="position-absolute rounded button"
                                data-url={ formUrl( 'link-card' ) }
                            > commencer </span>
                        </div>
                        <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg rounded mr-3 m-lg-4 mb-4">
                            <span>
                                <span className="badge badge-light mr-1"> C </span>
                                hercher les mots.
                            </span>
                            <span 
                                className="position-absolute rounded button"
                                data-url={ formUrl( 'search-word' ) }
                            > commencer </span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    },
    game: ( needed ) => (
        <Game src={ needed } />
    )
};

export default function Exercise ( ) {
    const 
        route = useRouter(),
        { needed } = route.query;
    return Contents.route( needed );
};

Exercise.page = page;
Exercise.scripts = [ '/script/extends/exercise.js' ];