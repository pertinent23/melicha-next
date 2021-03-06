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
    getItem: function ( __item__ ) {
        return (
            <div className="formation-option container-fluid d-flex flex-column justify-content-between shadow-lg rounded mr-3 m-lg-5 mb-4" key={ __item__.name }>
                <div className="container d-flex justify-content-between start py-3">
                    <div className="item-title"> { __item__.name } </div>
                    <div className="item-icon rounded d-flex justify-content-center align-items-center"> { __item__.name[ 0 ] } </div>
                </div>
                <div className="item-text px-4">
                    <img src={ __item__.img } alt="icon" className="img float-left mr-3" />
                    { __item__.description }
                </div>
                <div className="container d-flex justify-content-end start pr-4"></div>
            </div>
        );
    }
};

export const page = "lexique";
export default function Formation ( { list } ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/lexique.css"/>
            </Head>
            <div className="container-fluid main-container h-100 d-none position-relative px-0">
                <div className="container-fluid content-icon position-absolute d-flex h-100 w-100 justify-content-center align-items-center">
                    <img src="/img/formations.svg" alt="icon" className="img img-responsive"/>
                </div>
                <div className="container-fluid content-page d-block">
                    <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
                        <Header title={ "Lexique" } />
                    </div>
                    <div className="container-fluid px-3 py-4 d-flex flex-column justify-content-center align-items-center content-fomation-item pt-5">
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
            name: 'Souris',
            img: '/img/lexique/souris.png',
            description: "En informatique, le terme souris -- ?? mouse ??, en anglais -- fait r??f??rence ?? un dispositif de commande tenu dans la paume de la main, connect?? ?? un ordinateur et dont le d??placement sur une surface entra??ne le d??placement d'un curseur sur l'??cran."
        } );

        result.push( {
            name: 'Clavier',
            img: '/img/lexique/clavier.png',
            description: "Un clavier d'ordinateur est une interface Homme-machine qui permet la saisie de textes, de num??ros, de symboles et de commandes ?? l'aide d'un certain nombre de touches."
        } );

        result.push( {
            name: 'Disque dur',
            img: '/img/lexique/disque_dur_3.png',
            description: "Un disque dur est un mat??riel informatiqueutilis?? pour stocker du contenu et des donn??es num??riques sur les ordinateurs. Chaqueordinateur poss??de un disque dur interne, mais il existe ??galement des disques durs externes qui peuvent servir ?? ??tendre la capacit?? de stockage d'un ordinateur."
        } );

        result.push( {
            name: 'Cl?? USB',
            img: '/img/lexique/cle usb.png',
            description: "petit appareil de stockage mobile qui se connecte sur le port USB."
        } );

        result.push( {
            name: 'RAM',
            img: '/img/lexique/ram_ddr3.png',
            description: "pour Random Access Memory) est une m??moire vive pr??sente dans tous les ordinateurs. Elle permet de stocker provisoirement des donn??es"
        } );
    return {
        props: { 
            list: result  
        }
    };
};