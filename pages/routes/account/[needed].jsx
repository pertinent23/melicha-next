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
    generate: function ( needed ) {
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
                    this.generateUserPage( needed )
                );
            }
        }
    },
    generateUserPage: function ( pseudo ) {
        return (
            <div className="container-fluid main-container h-100 d-none px-0">
                <MyAccount 
                    pseudo={ pseudo }
                    name={ 'name' }
                    surname={ 'surname' }
                    email={ 'email' }
                    icon={ "/img/user1.jpg" }
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
export default function Account () {
    const 
        route = useRouter(),
        { needed } = route.query;
    return Contents.generate( needed );
};

Account.page = page;
Account.scripts = [ '/script/extends/account.js' ];