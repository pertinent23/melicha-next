Digital( function ( $ ) {
    const user = $.getStorage( 'user' );
    if( user ) {
        const myAccount = JSON.parse( user );
        try{
            $( '#name' ).text( myAccount.name );
            $( '#surname' ).text( myAccount.surname );
            $( '#icon' ).src( myAccount.icon );
        } catch( e ) {}
    } else {
        window.location = "/routes/account/connection"
    }
} );