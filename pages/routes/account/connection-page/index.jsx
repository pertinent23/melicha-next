import { Fragment } from 'react';

export default function Connection () {
    return (
        <Fragment>
            <div className="container-fluid main-container h-100 d-none">
                <div className="container-fluid position-relative d-flex flex-column justify-content-center content-form px-0 px-lg-5 mt-3 mb-5">
                    <div className="container-fluid form h-auto position-relative border p-0 my-5 rounded shadow">
                        <div className="container-fluid position-relative form-head py-4 rounded">
                            <span> Connection </span>
                        </div>
                        <div className="container-fluid position-relative pb-4 pt-5 px-lg-2 form-body">
                            <div className="list-group container px-2 form-items position-relative">
                                <div className="row pt-5 pb-4 form-item px-2 pl-lg-4">
                                    <div className="col col-lg-3 form-name d-flex align-items-center py-2"> Pseudo: </div>
                                    <div className="col-12 col-sm-8 form-input">
                                        <input type="text" name="pseudo" id="pseudo" placeholder="Ex: @user" className="pl-3 rounded w-100 filled-field" />
                                    </div>
                                </div>
                                <div className="row pt-5 pb-4 form-item px-2 pl-lg-4">
                                    <div className="col col-lg-3 form-name d-flex align-items-center py-2"> Mot de passe: </div>
                                    <div className="col-12 col-sm-8 form-input">
                                        <input type="passwor" name="password" id="password" placeholder="Ex: .... " className="pl-3 rounded w-100 filled-field" />
                                    </div>
                                </div>
                                <div className="row pt-5 mb-2 form-item px-2 px-lg-4 content-submit position-relative">
                                    <div className="container-fluid d-flex justify-content-end form-input pt-5 px-0 border-top">
                                        <input type="button" name="connection" id="submit" value="Connection" className="rounded submit button px-4 py-1 mr-3" data-action="connection" />
                                        <input type="button" name="inscription" id="inscription" value="Inscription" className="rounded tiers button px-4 py-1" />
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