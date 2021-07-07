$$.setStorage( 'entry', JSON.stringify( [
    [ 'souris', 'clavier', 'ecran', 'moniteur', 'usb' ],
    [ 'sata', 'ram', 'moniteur', 'clavier', 'routeur' ]
] ) );
const 
    __base__key__ = 'abcdefghidk',
    __item__keys__ = __base__key__.toUpperCase().split( '' ),
    __get__key__ = function ( index ) {
        return __item__keys__[ index ];
    },
    __get__key__index__ = function ( __key__ ) {
        return __item__keys__.indexOf( __key__ ) + 1; 
    },
    ItemsKey = { },
    Storage = {
        saved: false
    };
const
    Choice = function ( list ) {
        for( const item of list ) {
            const size = item.getSizes();
                if ( size.width <= 24 )
                    return item;
        }
        return list[ 0 ];
    },
    BorderWidth = 3,
    PuzzSize = 25,
    Font = {
        size: 0.9,
        police: 'aaargh'
    },
    Color = {
        lighBlack: "rgba( 0, 0, 0, 0.6 )",
        border: '#000000',
        mainPuzz: 'purple',
        puzz: '#000000',
        true: 'rgba( 0, 255, 0, 0.6 )',
        false: 'rgba( 255, 0, 0, 0.6 )'
    },
    /** 
        * 
        * Les models décrivent les donnés
        * qu'on va ajouter sur le canvas dans
        * chaque object DrawSpace les données qu'il 
        * ajoutent sont définies à l'aide de la constante
        * qui sont qui contenues dans la propriété args du Model
        * Ex: Model.args contient l'ensemble des constantes utilisables 
        * à l'interieur du model 
        * 
    */
    BorderModel = DefineModel( BorderWidth, BorderWidth, function ( x, y, width, height, data ) {
        /**
            * BorderModel permet de définir les contours de
            * l'espace cliquable
            * Se sont les zones ou on peut ajouter les
            * contenu des puzzels 
        */
        const position = BorderWidth / 2;
            this.strokeStyle = data.isMain ? Color.mainPuzz : Color.border;
            this.lineWidth = position;
                this.strokeRect( 
                    x + position, y + position, 
                    width - BorderWidth, height - BorderWidth 
                );
        return this;
    }, { } ),
    PuzzModel = DefineModel( 0, 0, function ( x, y, width, height, data ) {
        /**
            * PuzzModel permet d'écrire à l'interieur des 
            * DrawSpace à l'aide des propriéte .word et 
            * .isMain des args 
        */
        const 
            position = Font.size / 2,
            innerBorder = BorderWidth * 2;
            this.fillStyle = data.isMain ? Color.mainPuzz : Color.puzz;
            this.font = ( Font.size + 'em ' ).concat( Font.police );
            this.clearRect( x + innerBorder, y + innerBorder, width - innerBorder, height - innerBorder );
        return this.fillText( data.word, 
            x + ( width / 2 ) - position,
            y + height - BorderWidth
        );
    }, { } ),
    PuzzFillModel = DefineModel( 0, 0, function ( x, y, width, height, data ) {
        /**
            * Ce Model permet de colorier l'interieur
            * du DrawSpace aver une couleur definit par
            * .color de .args 
        */
        const innerBorder = BorderWidth * 2;
            this.fillStyle = data.color;
        return this.fillRect( 
            x + innerBorder, y + innerBorder, 
            width - innerBorder, height - innerBorder 
        );
    } );

Utils.result = 0; // le resultat final de l'utilisateur
Utils.__storage__ = { }; // les contenue

Utils.drawLine = function ( x1, y1, x2, y2, color ) {
    const context = Storage.context;
        context.lineWidth = PuzzSize / 2;
        context.lineCap = 'round';
        context.strokeStyle = color;
        context.beginPath();
        context.moveTo( x1, y1 );
        context.lineTo( x2, y2 );
        context.stroke();
    return context;
};

Storage.save = function () {
        this.image = this.context.getImageData( 0, 0, this.data.width, this.data.height );
    return this;
};

Storage.restore = function () {
    if ( this.image )
        return this.context.putImageData( this.image, 0, 0 );
};

Utils.line = function ( color ) {
    if ( Storage.start && Storage.end ) {
            Storage.restore();
        Utils.drawLine( Storage.start.x, Storage.start.y, Storage.end.x, Storage.end.y, color );
    }
};

Utils.__mouse__move__ = function ( puzz ) {
    const 
        x = ( puzz.x * PuzzSize ) + ( PuzzSize / 2 ) + Storage.baseX,
        y = ( puzz.y * PuzzSize ) + ( PuzzSize / 2 );
            Storage.end = { x, y };
        Storage.endPuzz = puzz;
    if ( Storage.begin )
        return Utils.line( Color.lighBlack );
};

Utils.__mouse__down__ = function ( puzz ) {
    Storage.restore();
    const 
        x = ( puzz.x * PuzzSize ) + ( PuzzSize / 2 ) + Storage.baseX,
        y = ( puzz.y * PuzzSize ) + ( PuzzSize / 2 );
            Storage.start = { x, y };
            Storage.begin = true;
        Storage.startPuzz = puzz;
        Storage.save();
    return Utils.line( Storage.start, Storage.end, Color.lighBlack );
};

Utils.analyse = function ( start, end ) {
    let pos = 0;
        if( start.y === end.y ) {
            pos = start.x > end.x ? 8 : 4;
        } else {
            if ( start.y > end.y ) {
                if ( start.x === end.x ) {
                    pos = 2; 
                } else {
                    if ( start.x > end.x ) {
                        pos = 1;
                    } else {
                        pos = 3;
                    }
                }
            } else {
                if ( start.x === end.x ) {
                    pos = 6; 
                } else {
                    if ( start.x > end.x ) {
                        pos = 7;
                    } else {
                        pos = 5;
                    }
                }
            }
        }
    return {
        x: Storage.startPuzz.x,
        y: Storage.startPuzz.y,
        width: pos === 4 || pos === 8 ? ( Math.abs( start.x - end.x ) / PuzzSize ) + 1 : ( Math.abs( start.y - end.y ) / PuzzSize ) + 1,
        pos
    };
};

Utils.__finalyse__  = function ( result ) {
    for ( let word in ItemsKey ) {
        if ( result.width !== word.length ) 
            continue;
                const { x, y } = ItemsKey[ word ].data.start;
        if ( x === result.x && y === result.y && result.pos === ItemsKey[ word ].data.direction ) {
                    ItemsKey[ word ].node.css( { textDecoration: 'line-through' } );
                delete ItemsKey[ word ];
            return true;
        }
    }
    return false;
};

Utils.endFalse = function () {
    Storage.restore();
        Utils.line( Color.false );
    return Digital.setTime( function () {
        return Storage.restore();
    }, 400 );  
};

Utils.endTrue = function () {
    Storage.restore();
    return Utils.line( Color.true );
};

Utils.___mouse__up__ = function () {
    try{
        const 
            result = Utils.analyse( Storage.start, Storage.end );
                if ( Utils.__finalyse__( result ) ) {
                            Utils.result++;
                        Utils.endTrue();
                    Storage.save();
                } else 
                    Utils.endFalse();
                        delete Storage.start;
                        delete Storage.end; 
            Storage.begin = false;
        return this;
    } catch( e ) { Storage.restore() }
};

Utils.__create__all__puzz__ = function ( entry, getPuzz, data ) {
    let x, y;
    const baseX = ( data.width - ( PuzzSize *  20 ) ) / 2;
    const grille = [];
    y = 0;
        Storage.baseX = baseX;
        for( const line of entry ) {
            const nline = [];
            x = 0;
                for( const word of line ) {
                    const data = {};
                        PuzzModel.args.word = word;
                        data.x = ( x * PuzzSize ) + baseX;
                        data.y = y * PuzzSize;
                        data.puzz = getPuzz( data.x, data.y )
                                    .addModel( BorderModel )
                                    .addModel( PuzzModel );
                                data.puzz
                                    .on( 'mousemove', Utils.__mouse__move__ )
                                    .on( 'mousedown', Utils.__mouse__down__ );
                            data.puzz.addKeyArgs( 'x', x );
                            data.puzz.addKeyArgs( 'y', y );
                        nline.push( data );
                    x++;
                }
                grille.push( nline );
            y++;
        }
    return grille;
};

Utils.initDom = function ( { solution } ) {
    console.log( solution );
    let i = 0, node;
    const items = Digital( '.main-list-item' );
        for ( let word in solution ) {
            if ( !Digital.isObject( solution[ word ] ) )
                continue;
                node = items.n( i ).text( `${ i + 1 }. ${ word }` );
                ItemsKey[ word ] = {
                    node: node,
                    data: solution[ word ]
                };
            i++;
        }
    return this;
};

Utils.__init__engine = function ( entry, getPuzz, data ) {
    const 
        needed = window.initSearchWord( entry ),
        puzzList = Utils.__create__all__puzz__( needed.grille, getPuzz, data );
        Utils.initDom( needed );
    Storage.puzzList= puzzList;
    Storage.data = data;
};

Digital( function ( $ ) {
    const entry = [];
    let
        canvas = $( "#myCanvas" ),
        board = new Board( canvas ),
        getPuzz = function ( x, y ) {
            return new DrawSpace( board, Coord(
                x, y,
                PuzzSize, PuzzSize
            ) );
        },
        initEngine = function () {
            return Utils.__init__engine( entry, getPuzz, {
                width: board.getWidth(),
                height: board.getHeight()
            } );
        },
        initEvent = function () {
            return $( "#next-button" ).click( function () {
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
        },
        init = function () {
            Storage.context = board.context;
                    board.canvas.on( {
                        mouseup: Utils.___mouse__up__
                    } );
                initEngine();
            return initEvent();
        };

    return ( function ( $ ) {
        let data = $.getStorage( 'entry' );
            if ( data !== null ) {
                const __arr__ = JSON.parse( data )[ randIn( 1, 2 ) - 1 ];
                    for( const item of __arr__ )
                        entry.push( item );
                    init();
                actions = 1;
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