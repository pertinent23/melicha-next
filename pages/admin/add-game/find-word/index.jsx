import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Nav from './../../@nav';
import Choice from './../@select-formation-and-course';

export const page = 'admin.add.game.find.word';
export default function AddFindWord( ) {
    const 
        route = useRouter(),
        url = route.pathname;
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/admin.css"/>
            </Head>
            <div className="container-fluid main-container h-100 d-none px-0">
                <div className="container-fluid px-0 d-flex flex-column pb-5">
                    <Nav url={ url } backFx={ route.back }/>
                    <div className="container px-3 py-4 mt-4"> Il faut en entrer cinq phases/questions et leur responses/mots manquant. </div>
                    <Choice />
                    <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-4">
                        <div className="list-group container position-relative">
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 1:"/>
                                <input type="text" name="question-value" className="question-value mx-5" placeholder="Réponse 1:"/>
                            </div>
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 2:"/>
                                <input type="text" name="question-value" className="question-value mx-5" placeholder="Réponse 2:"/>
                            </div>
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 3:"/>
                                <input type="text" name="question-value" className="question-value mx-5" placeholder="Réponse 3:"/>
                            </div>
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 4:"/>
                                <input type="text" name="question-value" className="question-value mx-5" placeholder="Réponse 4:"/>
                            </div>
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 5:"/>
                                <input type="text" name="question-value" className="question-value mx-5" placeholder="Réponse 5:"/>
                            </div>
                        </div>
                        <div className="content-submit pt-4">
                            <input type="button" value="Créer" id="submit"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};