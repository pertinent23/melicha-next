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

Digital( function ( $ ) {
    /** 
        * commencer l'authentification 
        * de l'utilisateur 
    */
    
    $( '[data-pseudo]' ).each( function () {
        let path = '/routes/account/';
        const 
            node = $( this ),
            data = node.attr( 'data-pseudo' );
        return node.click( function () {
            window.location.href = path.concat( data );
        } );
    } );
} );