( function ( $ ) {
    $( '.nav-item' ).each( function () {
        $( this ).click( function () {
            $( '.navbar-collapse' ).removeClass( 'show' );
        } );
    } );
} )( window.Digital );