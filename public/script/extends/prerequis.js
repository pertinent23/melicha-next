Digital( function ( $ ) {
    const containers = $( '.content-question' );
    const answer = [ 'r1', 'r2', 'r3', 'r4' ];
    const data = [];
    const questions = {
        "l’ordinateur est composé uniquement des composants de base ": false,
        "le port jack est encore appelé port audio": true,
        "e port VGA sert à connecter un écran à la carte graphique ": true,
        "l’unité centrale contient les éléments externes de l’ordinateur ": false
    };

    let i = 0;
    $.each( questions, function ( question ) {
        containers.n( i ).text( question );
        data.push( {
            question: question,
            value: this
        } );
        i++;
    } );

    $( "#verifier" ).click( function () {
        let i = 4;
        $.each( answer, function ( index ) {
            const needed = data[ index ]; 
            const cases = $( `[name=${ this }]` );
                if ( cases.checked().inArray( true ) ) {
                    const checked = cases.checked();
                    if ( ( !needed.value && checked.indexOf( true ) === 0 ) || ( needed.value && checked.indexOf( true ) === 1 ) )
                        i--;
                } else {
                    i--;
                }
        } );

        if ( i >= 3 ) {
            window.location = '/routes/courses/index';
        } else {
            window.location = '/routes/courses/false';
        }
    } );
} );