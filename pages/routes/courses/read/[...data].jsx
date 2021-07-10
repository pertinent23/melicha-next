import Head from 'next/head';
import { Fragment, useState } from 'react';
import { page } from './../[formation]';
import Header from './../../@header';

const 
    pt1 = "Fonctionnement de l'ordinateur",
    pt2 = 'TP 1';

const Utils = {
    getObjectif( data ) {
        let list = [];
            if ( data === pt1 ) {
                list = [
                    "- Reproduire le schéma fonctionnel de base de l’ordinateur",
                    "- Classer les périphériques d’un ordinateur en entrée et sortie ",
                    "- Designer les éléments constitutifs de l’unité centrale ",
                    "- Utiliser les unités ou supports de stockage"
                ];
            } else {
                if ( data === pt2 ) {
                    list = [
                        "- Transport du matériel informatique",
                        "- Connecter le matériel"
                    ];
                } else {
                    list = [
                        "- Démarrer et arrêter l’ordinateur ",
                        "- Utiliser les supports magnétiques et optiques ",
                        "- Conserver le matériel"
                    ];
                }
            }
            list = list.map( function ( data, index ) {
                return (
                    <div key={ index }> { data } </div>
                );
            } );
        return list;
    },
    getQuestions( data ) {
        const [ baseColor, setBaseColor ] = useState( '#000000' );
        const [ color, setColor ] = useState( '#000000' );
        let 
            list = {},
            responses;
            if ( data === pt1 ) {
                list = {
                    questions: "Comment fonctionne l’ordinateur? Comment on appelle tous ces éléments qui sont connectés à lui ? et à quoi servent-ils ?",
                    true: 1,
                    responses: [
                        "- C’est une machine qu’on utilise pour jouer.",
                        "- appareil électronique qui prend des informations en entrée, les stocke, les traite et retourne les résultats en sortie.",
                        "- C’est un outil qui fait beaucoup de choses , ecouter la musique, envoyer des messages "
                    ]
                };
            } else {
                if ( data === pt2 ) {
                    list = {
                        questions: "Comment va-t-on s’y prendre pour transporter tout ça a la fois ? ",
                        true: 2,
                        responses: [
                            "- On appelle beaucoup de personnes, chacun porte un composant et on se déplacer ensemble ",
                            "- On cherche un gros carton qui peut contenir tout ça et on l’y transporte  ",
                            "- On va déconnecter tous les périphériques liés à l’unité centrale, les mettre chacun dans son carton afin d’assurer un transport en toute sécurité"
                        ]
                    };
                } else {
                    list = {
                        questions: "Qu’est-ce qu’un disque dur ? quels sont les autres dispositifs qui jouent le même rôle que lui ? comment les utilise-t-on ?",
                        true: 2,
                        responses: [
                            "- Le disque dur c’est comme le frigo de l’ordinateur on garde tout à l’intérieur. Les autres sont la clé USB et la ram",
                            "- le disque dur c’est comme le tiroir on garde tout dedans . ",
                            "- Le disque dur : dispositif qui permet de stocker d’importantes quantités d’informations conservées même après la mise hors tension de l’ordinateur. Les autres sont : La disquette, la clé USB"
                        ]
                    };
                }
            }
            responses = list.responses.map( function ( data, key ) {
                return (
                    <div key={ key } className="py-1" style={{color: key === list.true ? baseColor : color }} onClick={ function () {
                        setColor( "red" );
                        setBaseColor( 'green' );
                    } }> { data } </div>
                );
            } );
        return (
            <Fragment>
                <span> { list.questions } </span>
                <div className="d-block pl-5 py-3">
                    { responses }
                </div>
            </Fragment>
        );
    }
};

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
                    <div className="container-fluid d-flex flex-column justify-content-center align-items-start p-0 py-5">
                        <div className="container-fluid courses-title py-4 px-0">
                            { course }
                            <div className="container-fluid px-0 pt-5" style={{fontSize: "1.1em"}}>
                                <span style={{color: "var(--purple)"}}> Objectifs: </span> <br />
                                <span className="pl-5 ml-2" style={{fontSize: "0.7em"}}> A la fin de cette leçon, je serais capable de :  </span>
                                <div id="requireList" className="container-fluid pl-5" style={{fontSize: "0.8em"}}>
                                    { Utils.getObjectif( course ) }
                                </div>
                            </div>
                            <div className="container-fluid px-0 pt-5" style={{fontSize: "1.1em"}}>
                                <span style={{color: "var(--purple)"}}> Situation problème: </span>
                                <div className="container-fluid pl-5 pr-5 text-center py-3" style={{fontSize: "0.7em"}}>
                                    { 
                                        course === pt1 ? "Votre cousin ADA qui vit au village est venu chez vous pour les grandes vacances. Tout excité de le recevoir vous lui présenter votre chambre et tous ce qui s’y trouve : dressing, lit, jouets y compris l’ordinateur de maison. Ada qui a déjà longtemps entendu parler d’ordinateur mais sans jamais avoir vu est ébloui et vous pose des questions :" :
                                        course === pt2 ? "Pendant ces mêmes vacances, votre tante souhaite déménager et vous appelle Ada et vous pour l’aider à emballer et transporter les meubles. Alors au moment de s’intéresser à l’ordinateur desktop, ada vous demande :" :
                                        "Pendant ces mêmes vacances, votre tante souhaite déménager et vous appelle Ada et vous pour l’aider à emballer et transporter les meubles. Alors au moment de s’intéresser à l’ordinateur desktop, ada vous demande :" 
                                    }
                                </div>
                            </div>
                            <div className="container-fluid px-0 pt-5" style={{fontSize: "1.1em"}}>
                                <span style={{color: "var(--purple)"}}> Questions: </span>
                                <div className="container-fluid pl-5 pr-3 py-3" style={{fontSize: "0.7em"}}>
                                    <div className="container-fluid rounded py-3 my-2 mb-3" style={{backgroundColor: "var(--purple)", color: "#FFFFFF"}}> 
                                        Cliquer pour choisir la bonner réponse. 
                                    </div>
                                    { Utils.getQuestions( course ) }
                                </div>
                            </div>
                            <div className="container-fluid px-0 pt-5" style={{fontSize: "1.1em"}}>
                                <span style={{color: "var(--purple)"}}> Resumé: </span>
                            </div>
                            <div className="container-fluid d-flex justify-content-center align-items-center py-5 px-0">
                                <video src={
                                    course === pt1 ? '/video/Video 1.mp4'
                                    : course === pt2 ? '/video/Video 2.mp4'
                                    : '/video/Video 4.mp4'
                                } controls={ true }></video>
                            </div>
                        </div>
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