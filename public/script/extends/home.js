const $ = Digital;
window.draw = function ( entry ) {
    const 
        data = entry,
        labels = [ "june", "July", "August", "September", "november", "december", "january", "february", "march", "april" ],
        canvas = $( "#chart" );
        canvas.attr( {
            height: canvas.css( "height" )
        } );
    const context = canvas.getContext( "2d" );
    new Chart( context, {
        type: "line",
        data: {
            labels: data,
            datasets: [ {
                data: data,
                label: "progression",
                backgroundColor: "rgba( 255, 255, 255, 0.4 )",
                fill: true,
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
                borderJoinStyle: "round",
                tension: 0.3,
                borderWidth: 2
            } ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    color: "#FFFFFF",
                    ticks: {
                        color: "rgba( 255, 255, 255, 0.8 )",
                        font: "25pt arial",
                        callback: function( value, index ) {
                            if( data.inArray( value ) )
                                return labels[ data.indexOf( value ) ];
                            return "";
                        }
                    },
                    grid: {
                        borderColor: "transparent",
                        borderWidth: 5
                    }
                },
                x: {
                    display: false
                }
            }
        }
    } );
};

Digital( function () {
    const data = Digital.getStorage( 'res' );
    try{
        const 
            entry = JSON.parse( data ),
            needed = [ 0, 0, 0, 0 ].concat( entry );
        window.draw( needed.slice( needed.length - 4 ) );
    } catch( e ) {
        window.draw( [ 0, 0, 0, 0 ] );
    }
} );