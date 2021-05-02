window.loadScript = function ( url ) {
    return ( function ( $, url ) {
        return $( 'div' ).append( {
            el: 'script',
            type: "text/javascript",
            src: url
        } );
    } )( window.Digital, url );
};