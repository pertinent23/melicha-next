Digital( function ( $ ) {
    $( '#connection, #inscription' ).each( function () {
        const 
            base = '/routes/account/',
            node = $( this ),
            id = node.id();
        return node.click( function () {
            window.location = base.concat( id );
        } );
    } );
} );