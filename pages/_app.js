import Root from "./routes/Root";
import App from "next/app";

function MyApp( { Component, pageProps } ) {
    return (
        <Root page={ Component.page }>
            <Component { ...pageProps } />
        </Root>
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
