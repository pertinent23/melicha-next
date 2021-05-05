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
        <div className="container-fluid content-next-button d-flex position-relative justify-content-end pb-4">
            <button id="next-button" className="verify"> { name } </button>
        </div>
    </Fragment>
);

export const Canvas = () => (
    <div className="container-fluid d-flex position-relative justify-content-center py-5 mb-4">
        <canvas id="myCanvas" width="550" height="400" className="d-block position relative border rounded"></canvas>
    </div>
);

export const GameBody = ( { children, name, title, gameInfos, canvas } ) => (
    <Fragment>
        <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
            <Header title={ title } />
        </div>
        <div className="container-fluid p-0 py-4 d-flex flex-column justify-content-center align-items-center content-exercise-item pt-5 mb-5">
            <div className="container-fluid">
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