Digital( function ( $ ) {
    const containers = $( '.content-question' );
    const answer = [ 'r1', 'r2', 'r3', 'r4' ];
    const data = [];
    const questions = {
        "L’informatique est-elle la science du traitement automatique et rationnel de l’information à l’aide de l’ordinateur ? ": true,
        "l’information est une nouvelle qu’on passe à la télévision": false,
        "l’ordinateur est une machine automatique de traitement de l’information": true,
        "le matériel et le logiciel sont les deux parties de l’ordinateur  ": true
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