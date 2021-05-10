import { Fragment } from 'react';

export default function Inscription ( { options, submit, connection, title } ) {
    return (
        <Fragment>
            <div className="container-fluid main-container h-100 d-none" data-options={ options }>
                <div className="container-fluid position-relative d-flex flex-column justify-content-center content-form px-0 px-lg-5 mt-3 mb-5" data-form="inscription">
                    <div className="container-fluid form h-auto position-relative border p-0 my-5 rounded shadow">
                        <div className="container-fluid position-relative form-head py-4 rounded">
                            <span> { title } </span>
                        </div>
                        <div className="container-fluid position-relative pb-4 pt-5 px-lg-2 form-body">
                            <div className="container py-0 pb-4 d-flex position-relative justify-content-center align-items-center">
                                <input type="file" name="file" id="file" className="d-none"/>
                                <div className="position-relative content-user-icon rounded-circle border d-flex p-2">
                                    <div className="container-fluid position-relative d-flex h-100 w-100 subcontent-user-icon rounded-circle p-0">
                                        <img src="/img/person.svg" alt="user-icon" className="img position-relative h-100 w-100 rounded-cicle user-icon"/>
                                    </div>
                                    <div className="container-fluid position-absolute user-icon-cover h-100 w-100 rounded-circle p-0">
                                        <label htmlFor="file" className="d-block position-absolute h-100 w-100 rounded-circle">
                                            <div className="d-flex justify-content-center align-items-center position-relative add-file border rounded-circle">
                                                <span className="items item1 d-block position-absolute"></span>
                                                <span className="items item2 d-block position-absolute"></span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group container px-2 form-items position-relative">
                                <div className="row pt-4 pb-4 form-item px-2 pl-lg-4">
                                    <div className="col col-lg-4 form-name d-flex align-items-center py-2"> Nom: </div>
                                    <div className="col-12 col-sm-8 form-input">
                                        <input type="text" name="name" id="name" placeholder="Ex: Nganou" className="pl-3 rounded w-100 filled-field" />
                                    </div>
                                </div>
                                <div className="row pt-4 pb-4 form-item px-2 pl-lg-4">
                                    <div className="col col-lg-4 form-name d-flex align-items-center py-2"> Prénom: </div>
                                    <div className="col-12 col-sm-8 form-input">
                                        <input type="text" name="surname" id="surname" placeholder="Ex: Lili" className="pl-3 rounded w-100 filled-field" />
                                    </div>
                                </div>
                                <div className="row pt-4 pb-4 form-item px-2 pl-lg-4">
                                    <div className="col col-lg-4 form-name d-flex align-items-center py-2"> Pseudo: </div>
                                    <div className="col-12 col-sm-8 form-input">
                                        <input type="text" name="pseudo" id="pseudo" placeholder="Ex: @user" className="pl-3 rounded w-100 filled-field" />
                                    </div>
                                </div>
                                <div className="row pt-4 pb-4 form-item px-2 pl-lg-4">
                                    <div className="col col-lg-4 form-name d-flex align-items-center py-2"> Mot de passe: </div>
                                    <div className="col-12 col-sm-8 form-input">
                                        <input type="password" name="password" id="password" placeholder="Ex: .... " className="pl-3 rounded w-100 filled-field" />
                                    </div>
                                </div>
                                <div className="row pt-4 pb-4 form-item px-2 pl-lg-4">
                                    <div className="col col-lg-4 form-name d-flex align-items-center py-2"> Réentrer le mot de passe: </div>
                                    <div className="col-12 col-sm-8 form-input">
                                        <input type="password" name="rpassword" id="rpassword" placeholder="Ex: .... " className="pl-3 rounded w-100 filled-field" />
                                    </div>
                                </div>
                                <div className="row py-3 form-item px-2 pl-4 pl-lg-5 d-flex flex-column content-error"></div>
                                <div className="row pt-5 mb-2 form-item px-2 px-lg-4 content-submit position-relative">
                                    <div className="container-fluid d-flex justify-content-end form-input pt-5 px-0 border-top">
                                        <input type="button" name="inscription" id="submit" value={ submit } className="rounded submit button px-4 py-1 mr-3" data-action="inscription" />
                                        { connection ? <input type="button" name="connection" id="connection" value="Connection" className="rounded tiers button px-4 py-1" /> : '' }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};