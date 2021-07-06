( function ( $ ) {
    $( '.nav-item' ).each( function () {
        $( this ).click( function () {
            $( '.navbar-collapse' ).removeClass( 'show' );
        } );
    } );
} )( window.Digital );

function addResult ( res ) {
    const 
        data = Digital.getStorage( 'res' ),
        obj = data && data != null ? JSON.parse( data ) : [ ],
        final = obj && obj != 'null' ? obj : [ ];
            final.push( res );
    return Digital.setStorage( 'res', JSON.stringify(
        final
    ) );
};


function addFinal( val, base ) {
    return addResult( ( 20 / base ) * val );  
};

function move() {
    try{
        window.history.back();
    } catch( e ) {}
};

Digital( function ( $ ) {
    $.setStorage( 'jwt', JSON.stringify( {
        name: 'name',
        surname: 'surname',
        pseude: '@user',
        icon: '/img/person.svg'
    } ) );
    $( '.content-loader' ).remove();
    return $( '.main-container' ).removeClass( 'd-none' );
} );

Digital( function ( $ ) {
    /** 
        * commencer l'authentification 
        * de l'utilisateur 
    */
    const user = $.getStorage( 'user' );
    if( user ) {
        const myAccount = JSON.parse( user );
        try{
            $( '#user-pseudo' ).text( myAccount.pseudo );
            $( '#user-img' ).src( myAccount.icon );
            $( '[data-pseudo]' ).attr( 'data-pseudo', `@${myAccount.pseudo}` );
        } catch( e ) {}
    }
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