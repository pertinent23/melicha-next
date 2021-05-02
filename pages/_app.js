import Root from "./routes/Root";
import App from "next/app";
import { Fragment } from 'react';

function MyApp( { Component, pageProps } ) {
    return (
        <Fragment>
            <Root page={ Component.page }>
                <Component { ...pageProps } />
            </Root>
            { Component.scripts ? Component.scripts.map( ( url, t, index ) => (
                <script src={ url } key={ index } data-t={ t }></script>
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
