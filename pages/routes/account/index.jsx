import Head from 'next/head';
import { Fragment } from 'react';

export const page = "account";
export default function Account ( ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/extends/account.css"/>
            </Head>
            <div className="container-fluid main-container h-100 p-0">
                <div className="presentation d-flex justify-content-start align-items-center p-5 shadow-lg">
                    <div className="icon content-user-icon">
                        <img src="/img/user1.jpg" alt="icon" className="img d-block position-relative h-100 w-100" />
                    </div>
                    <div className="content-pseudo d-flex justify-content-start align-items center pl-5">
                        @frackkk_pertinent
                    </div>
                </div>
                <div className="container d-flex flex-column px-5 py-4 mt-5 infos justify-content-center">
                    <div className="container infos-item d-flex py-4 mt-3 border-bottom">
                        <div className="infos-type d-block position-relative"> Nom: </div>
                        <div className="infos-value d-block position-relative ml-5"> Franck  </div>
                    </div>
                    <div className="container infos-item d-flex py-4 mt-5 border-bottom">
                        <div className="infos-type d-block position-relative"> Prenom: </div>
                        <div className="infos-value d-block position-relative ml-5"> Pertinent  </div>
                    </div>
                    <div className="container infos-item d-flex py-4 mt-5 border-bottom">
                        <div className="infos-type d-block position-relative"> Email: </div>
                        <div className="infos-value d-block position-relative ml-5"> 10franckpertinent@gmail.com </div>
                    </div>
                </div>
                <div className="container content-button d-flex justify-content-end align-content-center py-4 mt-4 px-5">
                    <input type="button" className="rounded d-block" value="Modifier" id="modify" />
                </div>
            </div>
        </Fragment>
    );
};

Account.page = page;