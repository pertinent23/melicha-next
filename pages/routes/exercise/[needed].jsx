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
                <div className="container-fluid main-container h-100 d-none px-0">
                    <div className="container content-icon position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
                        <img src="/img/game.svg" alt="icon" className="img img-responsive"/>
                    </div>
                    <div className="container-fluid content-page">
                        <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                            <Header title={ "Exercice" } />
                        </div>
                        <div className="container-fluid p-0 py-4 d-flex flex-row justify-content-center align-items-center content-exercise-item pt-5 mb-5">
                            <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg mr-3 m-lg-4 mb-4">
                                <span className="mb-5 container-fluid d-flex align-items-center position-relative py-5 py-lg-4">
                                    <span className="badge mr-1 p-2 position-relative"> Q </span>
                                    CM
                                </span>
                                <span 
                                    className="position-absolute rounded button"
                                    data-url={ formUrl( 'qcm' ) }
                                > Commencer </span>
                            </div>
                            <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg mr-3 m-lg-4 mb-4">
                                <span className="mb-5 container-fluid d-flex align-items-center position-relative py-5 py-lg-4">
                                    <span className="badge mr-1 p-2"> T </span>
                                    rouver les mots maquant.
                                </span>
                                <span 
                                    className="position-absolute rounded button"
                                    data-url={ formUrl( 'find-word' ) }
                                > Commencer </span>
                            </div>
                            <div className="exercise-option position-relative d-flex flex-column justify-content-center align-items-center shadow-lg mr-3 m-lg-4 mb-4">
                                <span className="mb-5 container-fluid d-flex align-items-center position-relative py-5 py-lg-4">
                                    <span className="badge mr-1 p-2"> C </span>
                                    lasser les cartes.
                                </span>
                                <span 
                                    className="position-absolute rounded button"
                                    data-url={ formUrl( 'link-card' ) }
                                > Commencer </span>
                            </div>
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