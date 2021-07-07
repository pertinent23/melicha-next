const $ = Digital;
$$.setStorage( 'entry', JSON.stringify( {
    sorted: [ 
        'Brancher l\'ordinateur sur une prise électrique.', 
        'Allumer l\'unité centrale', 
        'Allumer l\'unité l\'écran', 
        'Se connecter à sa séssion', 
        'Lancer l\'arrete de l\'ordinateur' 
    ],
    data: [ 
        'Brancher l\'ordinateur sur une prise électrique.', 
        'Lancer l\'arrete de l\'ordinateur', 
        'Allumer l\'unité l\'écran', 
        'Se connecter à sa séssion', 
        'Allumer l\'unité centrale' 
    ]
} ) );

Utils.result = 0;
Utils.sorted = {};

Utils.build =  function ( entry ) {
    const items = $( '.content-data' );
        for ( let index = 0; index < entry.length; index++ )
            items.n( index ).text( entry[ index ] );
    return this;
};

Utils.active = function () {
    const 
        ups = $( '.up' ),
        downs = $( '.down'),
        items = $( '.main-list-item' );
            ups.each( function ( index ) {
                const 
                    node = $( this ),
                    parent = items.n( index );
                return node.click( function () {
                    const next = parent[ 0 ].previousSibling;
                    if ( next ) {
                        $( next ).after( parent );
                        Utils.active();
                    }
                } );
            } );
            downs.each( function ( index ) {
                const 
                    node = $( this ),
                    parent = items.n( index );
                return node.click( function () {
                    const next = parent[ 0 ].nextSibling;
                    if ( next ) {
                        $( next ).before( parent );
                        Utils.active();
                    }
                } );
            } );
    return this;
}

Utils.verify = function () {
    const items = $( '.content-data' );
    Utils.result = items.text().toString() === Utils.sorted.toString() ? 5 : 0;
};

Utils.__init__engine = function ( entry ) {
    const 
        { sorted, data } = entry;
        Utils.sorted = sorted;
            Utils.build( data );
            Utils.active();
    return this;
};

Digital( function ( $ ) {
    $( "#next-button" ).click( function () {
        Utils.verify();
        addFinal( Utils.result, 5 );
        $( '.content-result' ).text( 'Resultat: '.concat( '' + Utils.result  ).concat( '/5' ) );
        const node = $( this );
                node.removeClass( 'verify' );
            node.text( 'Suivant' );
        return node.click( function () {
            /** 
                * Envoyer les données au niveau
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
                    * S'il ya pas d'entrées on prend les 
                    * données au niveau du cerveur
                    * pas un fetch ou par une requette Ajax 
                */
            }
        return data;
    } )( $ );
} );