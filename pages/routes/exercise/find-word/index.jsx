import { Fragment } from 'react';
import { page } from './../[needed]';

export default function FindWord ( ) {
    return (
        <Fragment>
            <div className="container-fluid main-container h-100">
                <div className="container-fluid p-0 py-4 d-flex flex-row justify-content-center align-items-center content-exercise-item pt-5 mb-5">
                    <h1> find word </h1>
                </div>
            </div>
        </Fragment>
    );
};

FindWord.page = page;