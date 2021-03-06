const $ = Digital;
$$.setStorage( 'entry', JSON.stringify( {
    matching: {
        'VGA': '/img/game/div_connecteur.png',
        'HDMI': '/img/game/connecteur_hdmi.png',
        'RJ45': '/img/game/Rj45 connectuer.png',
        'USB': '/img/game/connecteur_usb3.png',
    },
    list: [ 
        '/img/game/connecteur_usb3.png', 'VGA', 
        '/img/game/Rj45 connectuer.png', 'HDMI',
        '/img/game/connecteur_hdmi.png', 'USB',
        'RJ45', '/img/game/div_connecteur.png' 
    ]
} ) );

Utils.result = 0;

Utils.build =  function ( entry ) {
    const items = $( '.pins' );
        for ( let index = 0; index < entry.length; index++ ) {
            if ( entry[ index ][ 0 ] === '/' ) {
                items.n( index ).append(
                    $( { el: 'img', src: entry[ index ] } )
                );
            } else {
                items.n( index ).text( entry[ index ] );
            }
            items.n( index ).attr( 'data-w', entry[ index ] );
        }
    return this;
};

Utils.__init__engine = function ( entry ) {
    const 
        { matching, list } = entry,
        Storage = { active: false, data: '', node: null };
        Utils.build( list );
            $( '.pins' ).each( function () {
                let data;
                const 
                    node = $( this );
                return node.click( function () {
                    data = node.attr( 'data-w' );
                    if ( Storage.active ) {
                        for( let key in matching ) {
                            const res = matching[ key ];
                            if ( ( key === data && res === Storage.data ) || ( res === data && key === Storage.data ) ) {
                                        //    Storage.node.remove();
                                        //node.remove();
                                        function handle( e ) {
                                            return e;
                                        };
                                        Storage.node.click( handle );
                                        node.click( handle );
                                    Utils.result++;
                                    Storage.node.replaceClass( 'orange', 'green' );
                                    node.addClass( 'green' );
                                    Storage.active = false;
                                return;
                            }
                        }
                            Storage.node.replaceClass( 'orange', 'red' );
                            node.addClass( 'red' );
                            Digital.setTime( function () {
                                Storage.node.removeClass( 'red' );
                                node.removeClass( 'red' );
                            }, 600 );
                        Storage.active = false;
                    } else {
                        Storage.data = data;
                            Storage.node = node.addClass( 'orange' );
                        Storage.active = true;
                    }
                } );
            } );
    return this;
};

Digital( function ( $ ) {
    $( "#next-button" ).click( function () {
        addFinal( Utils.result, 4 );
        $( '.content-result' ).text( 'Resultat: '.concat( '' + Utils.result  ).concat( '/4' ) );
        const node = $( this );
                node.removeClass( 'verify' );
            node.text( 'Suivant' );
        return node.click( function () {
            /** 
                * Envoyer les donn??es au niveau
                * du serveur. 
                * pour les statistique
            */
            move();
        } );
    } );  
    return ( function ( $ ) {
        let data = $.getStorage( 'entry' );
            if ( data !== null ) {
                const 
                    entry = JSON.parse( data );
                return Utils.__init__engine( entry );
            } else {
                /**
                    * S'il ya pas d'entr??es on prend les 
                    * donn??es au niveau du cerveur
                    * pas un fetch ou par une requette Ajax 
                */
            }
        return data;
    } )( $ );
} );