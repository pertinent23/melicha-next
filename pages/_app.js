import Root from "./routes/Root";
import App from "next/app";
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp( { Component, pageProps } ) {
    const 
        route = useRouter(),
        event = 'routeChangeComplete',
        handle = function ( url ) {
            if( url === '/' || /\/routes\/exercise\/[a-z\-]{0,}/.test( url ) || url )
                return window.location.reload();
        };
            useEffect( function () {
                route.events.on( event, handle );
                return function () {
                    return route.events.off( event, handle );
                };
            } );
    return (
        <Fragment>
            <Root page={ Component.page }>
                <Component { ...pageProps } />
            </Root>
            { Component.scripts ? Component.scripts.map( ( url ) => (
                <script src={ url } key={ url }></script>
            ) ) : "" }
        </Fragment>
    );
};

MyApp.getInitialProps = async ( appContext ) => {
    const
        appProps = await App.getInitialProps( appContext );
    return {
        ...appProps
    };
};

export default MyApp;
