import Head from 'next/head';
import { Fragment } from 'react';

export const page = 'admin';
export default function Admin() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/admin.css"/>
            </Head>
            <div className="container pt-5">
                <div className="conten-title container d-flex justify-content-center mt-5">
                    <span className="title-text"> Connection </span>
                </div>
                <div className="form container content-inputs d-flex flex-column justify-content-center align-items-center">
                    <div className="content-field py-5">
                        <input type="text" name="username" id="username" placeholder="Nom d'utilisateur: "/>
                    </div>
                    <div className="content-field">
                        <input type="password" name="password" id="password" placeholder="Mot de passe:"/>
                    </div>
                    <div className="form-error text-danger py-4"></div>
                    <div className="content-submit">
                        <a href="/admin/home">
                            <input type="button" value="Connection" id="submit"/>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};