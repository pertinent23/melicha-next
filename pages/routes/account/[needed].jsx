import Head from 'next/head';
import { Fragment } from 'react';

import MyAccount from './my-account';
import Inscription from './inscription-page';
import Connection from './connection-page';

export const Contents = {
    const: {
        INSCRIPTION: 'inscription',
        CONNECTION: 'connection',
        MODIFY: 'modify'
    },
    generate: function ( needed, data ) {
        if( needed === this.const.CONNECTION ) {
            return this.finalyse(
                <Connection />
            );
        } else {
            if (  needed === this.const.INSCRIPTION ) {
                return this.finalyse(
                    <Inscription 
                        options={ needed } 
                        submit={ 'Je m\'inscris' } 
                        connection={ true } 
                        title={ 'Inscription' }
                    />
                );
            } else {
                if ( needed === this.const.MODIFY ) {
                    return this.finalyse(
                        <Inscription 
                            options={ needed } 
                            submit={ 'Modifier' } 
                            connection={ false } 
                            title={ 'Modifier mon compte' }
                        />
                    );
                } else {
                    return this.finalyse(
                        this.generateUserPage( needed, data )
                    );
                }
            }
        }
    },
    generateUserPage: function ( pseudo, data ) {
        return (
            <div className="container-fluid main-container h-100 d-none px-0">
                <MyAccount 
                    pseudo={ pseudo }
                    name={ data.name }
                    surname={ data.surname }
                    icon={ data.icon }
                />
            </div>
        );
    },
    finalyse: function ( data ) {
        return (
            <Fragment>
                <Head>
                    <link rel="stylesheet" href="/css/extends/account.css"/>
                </Head>
                { data }
            </Fragment>
        );
    }
};

export const page = "account";
export default function Account ( { needed, data } ) {
    return (
        Contents.generate( needed, data )
    );
};

export async function getServerSideProps ( context ) {
    const
        { needed } = context.query,
        result = {
            name: 'name',
            pseudo: needed,
            surname: 'surname',
            email: 'email1',
            icon:  "/img/person.svg"
        };
    return {
        props: {
            data: result,
            needed: needed
        }
    };
};

Account.page = page;
Account.scripts = [ '/script/extends/account.js' ];