import { Fragment } from 'react';
import { element, string, func, any } from 'prop-types';
import Header from './@header';

export const GameInfos = ( { children } ) => (
    <div className="container-fluid postion-relative d-flex flex-column game-infos py-4 rounded" role="alert">
        { children }
    </div>
);

export const Footer = ( { name } ) => (
    <Fragment>
        <div className="container-fluid d-flex position-relative justify-content-start pl-5 pb-4">
            <span className="content-result"></span>
        </div>
        <div className="container-fluid content-next-button d-flex position-relative justify-content-center pt-0 pt-md-5 pb-5">
            <button id="next-button" className="verify px-5 py-3 mt-md-3"> { name } </button>
        </div>
    </Fragment>
);

export const Canvas = () => (
    <div className="container-fluid d-flex position-relative justify-content-center py-5 mb-4">
        <canvas id="myCanvas" width="600" height="500" className="d-block position relative border rounded"></canvas>
    </div>
);

export const GameBody = ( { children, name, title, gameInfos, canvas } ) => (
    <Fragment>
        <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
            <Header title={ title } />
        </div>
        <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center content-exercise-item pt-5 pb-4 mb-5 px-0 px-sm-2 px-md-3">
            <div className="container-fluid px-1 px-sm-2 px-md-3">
                <GameInfos>
                    { gameInfos() }
                </GameInfos>
                { children }
            </div>
            { ( function ( isCanvas ) {
                return isCanvas ? 
                    <Canvas /> : '';
            } )( canvas )  }
            <Footer name={ name } />
        </div>
    </Fragment>
);

export default function Main () {
    return (
        <br/>
    );
};

GameInfos.propTypes = {
    children: element
};

Footer.propTypes = {
    name: string
};

GameBody.propTypes = {
    name: string,
    title: string,
    children: any,
    gameInfos: func
};