( function ( $ ) {
    $( '[data-url]' ).each( function () {
        const
            node = $( this ),
            val = node.attr( 'data-url' );
        node.click( function () {
            window.location.href = val;
        } );
    } );
} )( Digital );