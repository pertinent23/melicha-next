( function ( $ ) {
    $( '.nav-item' ).each( function () {
        $( this ).click( function () {
            $( '.navbar-collapse' ).removeClass( 'show' );
        } );
    } );
} )( window.Digital );

Digital( function ( $ ) {
    $( '.content-loader' ).remove();
    return $( '.main-container' ).removeClass( 'd-none' );
} );