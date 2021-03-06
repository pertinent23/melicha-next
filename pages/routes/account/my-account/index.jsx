import { Fragment } from 'react';

export default function MyAccount ( { pseudo, name, surname, icon } ) {
    return (
        <Fragment>
            <div className="container-fluid content-user-infos" data-form="account">
                <div className="container-fluid presentation d-flex justify-content-start align-items-center">
                    <div className="icon content-user-icon">
                        <img src={ icon } alt="icon" className="img d-block position-relative h-100 w-100" id="icon" />
                    </div>
                    <div className="content-pseudo d-flex justify-content-start align-items center pl-4">
                        { pseudo }
                    </div>
                </div>
                <div className="container position-relative d-flex flex-column px-5 py-4 infos justify-content-center">
                    <div className="container infos-item d-flex py-4 mt-3 border-bottom">
                        <div className="infos-type d-block position-relative"> Nom: </div>
                        <div className="infos-value d-block position-relative ml-5" id="name"> { name }  </div>
                    </div>
                    <div className="container infos-item d-flex py-4 mt-5 border-bottom">
                        <div className="infos-type d-block position-relative"> Prenom: </div>
                        <div className="infos-value d-block position-relative ml-5" id="surname"> { surname }  </div>
                    </div>
                    <div className="container infos-item d-flex py-4 mt-5 border-bottom">
                        <div className="infos-type d-block position-relative"> Pseudo: </div>
                        <div className="infos-value d-block position-relative ml-5" id="pseudo"> { pseudo } </div>
                    </div>
                </div>
                <br/>
                <div className="container content-button d-flex justify-content-end align-content-center py-4 mt-4 px-5 mb-3">
                    <input type="button" className="rounded d-block" value="Modifier" id="modify" />
                </div>
                <br/><br/>
            </div>
            <script src="/script/extends/my.js"></script>
        </Fragment>
    );
};