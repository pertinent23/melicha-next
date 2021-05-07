import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import MyAccount from './my-account';
import Inscription from './inscription-page';
import Connection from './connection-page';

export const Contents = {
    const: {
        INSCRIPTION: 'inscription',
        CONNECTION: 'connection'
    },
    generate: function ( needed, data ) {
        if( needed === this.const.CONNECTION ) {
            return this.finalyse(
                <Connection />
            );
        } else {
            if (  needed === this.const.INSCRIPTION ) {
                return this.finalyse(
                    <Inscription />
                );
            } else {
                return this.finalyse(
                    this.generateUserPage( needed, data )
                );
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
                    email={ data.email }
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