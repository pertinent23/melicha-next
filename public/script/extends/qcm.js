const
    Storage = { },
    KeyVal = {},
    Result = { },
    Inputs = { },
    bind = function ( entry ) {
        let i = 0;
            for ( let question in entry ) {
                const val = entry[ question ];
                    Storage[ i ] = {
                        question: question,
                        val: val
                    };
                i++;
            }
        return entry;
    };

Utils.__fill__list__ = function () {
    return $( '.prop-item' ).each( function ( index ) {
        const 
            node = $( this ),
            __quest__ = Storage[ index ].question,
            __val__ = Storage[ index ].val,
            __data__result__ = node.attr( 'data-result' );
                KeyVal[ __data__result__ ] = __val__;
                Result[ __data__result__ ] = !__val__;
                Inputs[ __data__result__ ] = node;
        return node.text(
            __quest__
        );
    } );
};

Utils.__active__radio__ = function () {
    return Digital( ':radio' ).each( function () {
        const 
            radio = Digital( this ),
            name = radio.name(),
            val = radio.value(),
            thruth = val === 'true' ? true : false;
        return radio.click( function () {
            Result[ name ] = thruth;
        } );
    } );
};

Utils.__set__false__ = function ( node ) {
    return node.addClass( 'text-danger' ).css( {
        'font-weight': 'bold'
    } );
};

Utils.__set__true__ = function ( node ) {
    return node.addClass( 'text-success' ).css( {
        'font-weight': 'bold'
    } );
};

Utils.average = 5;
Utils.__verify__ = function () {
    for ( let key in KeyVal ) {
        const 
            expected = KeyVal[ key ],
            result = Result[ key ];
        if ( expected !== result ) {
            const node = Inputs[ key ];
                Utils.average--;
            Utils.__set__false__( node );
        } else
            Utils.__set__true__( Inputs[ key ] );
    } 
    return Utils.average;
};

Utils.__init__ = function ( entry ) {
    bind( entry );
        Utils.average = 5;
            Utils.__fill__list__();
    return Utils.__active__radio__();
};

$$.setStorage( "entry", JSON.stringify( {
    'La souris a 06 bouttons ?': false,
    'Le clavier est toujour noir ?': false,
    'Le moniteur est encore appélé écran ?': true,
    'Le centre de calcul de la machine est le processeur ?': true,
    'L\'ordinateur n\'a qu\'un seul processeur ?': false 
} ) );

Digital( function ( $ ) {
    const
        data = $.getStorage( 'entry' ),
        entry = JSON.parse( data || { } );
        Utils.__init__( entry );
    return $( '#next-button' ).click( function () {
        Utils.result = Utils.__verify__();
        addFinal( Utils.result, 5 );
        $( '.content-result' ).text( 'Resultat: '.concat( '' + Utils.result  ).concat( '/5' ) );
        const node = $( this );
                node.removeClass( 'verify' );
            node.text( 'Suivant' );
        return node.click( function () {
            move();
            /** 
                * Envoyer les données au niveau
                * du serveur. 
                * pour les statistique
            */
        } );
    } );
} );