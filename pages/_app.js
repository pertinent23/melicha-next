import Root from "./routes/Root";

function MyApp( { Component, pageProps } ) {
    return (
        <Root page={ Component.page }>
            <Component { ...pageProps } />
        </Root>
    );
};

export default MyApp;
