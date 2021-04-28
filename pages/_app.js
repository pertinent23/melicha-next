import Root from "./routes/Root";

function MyApp( { Component, pageProps } ) {
    console.log( Component.page )
    return (
        <Root page={ Component.page }>
            <Component { ...pageProps } />
        </Root>
    );
};

export default MyApp;
