Digital( function ( $ ) {
    const base = '/routes/courses/';
    $( '[data-name]' ).each( function () {
        const node = $( this );
        return node.click( function () {
            const 
                val = node.attr( 'data-name' ),
                route = base.concat( val );
            window.location = route;
        } );
    } );
} );

Digital( function ( $ ) {
    const base = '/routes/courses/read';
    $( '[data-course]' ).each( function () {
        const node = $( this );
        return node.click( function () {
            const 
                course = node.attr( 'data-course' ),
                formation = node.attr( 'data-formation' ),
                route = base.concat( '/'.concat( formation ).concat( '/' ) ).concat( course );
            window.location = route;
        } );
    } );
} );