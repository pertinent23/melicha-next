import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Nav from './../../@nav';
import Choice from './../@select-formation-and-course';

export const page = 'admin.add.game.qcm';
export default function AddQCM( ) {
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
                    <div className="container px-3 py-4 mt-4"> Il faut en entrer cinq questions et leurs valeurs de vérité chacune. </div>
                    <Choice />
                    <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-4">
                        <div className="list-group container position-relative">
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 1:"/>
                                <select name="question-value" className="question-value mx-5">
                                    <option value="true"> 1. Vrai </option>
                                    <option value="false"> 2. False </option>
                                </select>
                            </div>
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 2:"/>
                                <select name="question-value" className="question-value mx-5">
                                    <option value="true"> 1. Vrai </option>
                                    <option value="false"> 2. False </option>
                                </select>
                            </div>
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 3:"/>
                                <select name="question-value" className="question-value mx-5">
                                    <option value="true"> 1. Vrai </option>
                                    <option value="false"> 2. False </option>
                                </select>
                            </div>
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 4:"/>
                                <select name="question-value" className="question-value mx-5">
                                    <option value="true"> 1. Vrai </option>
                                    <option value="false"> 2. False </option>
                                </select>
                            </div>
                            <div className="list-group-item py-4 focused-items d-flex position-relative py-2" contentEditable="false">
                                <input type="text" name="question" className="content-text d-block position-relative question" placeholder="Question 5:"/>
                                <select name="question-value" className="question-value mx-5">
                                    <option value="true"> 1. Vrai </option>
                                    <option value="false"> 2. False </option>
                                </select>
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