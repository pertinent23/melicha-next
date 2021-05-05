const 
    __base__key__ = 'abcdefghidk',
    __item__keys__ = __base__key__.toUpperCase().split( '' ),
    __get__key__ = function ( index ) {
        return __item__keys__[ index ];
    },
    __get__key__index__ = function ( __key__ ) {
        return __item__keys__.indexOf( __key__ ) + 1; 
    },
    KeyVal = { },
    Items = { };
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
        border: '#000000',
        mainPuzz: 'purple',
        puzz: '#000000',
        true: 'rgba( 0, 255, 0, 0.4 )',
        false: 'rgba( 255, 0, 0, 0.4 )'
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

Utils.result = 5; // le resultat final de l'utilisateur
Utils.__storage__ = { }; // les contenues

Utils.__organyse__ = function ( list ) {
    /**
        * Organise permet de créer une
        * object littéral contenant une 
        * clé de type Number et une valeur 
        * qui est une option parmit les mots que
        * l'utilisateur doit organiser. 
    */
    let 
        result = { },
        i = 0;
            for( const item of list )
                result[ ++i ] = item;
    return result;
};

Utils.__ItsCanBeJoin__ = function ( word_a, word_b ) {
    /**
        * Cette fonction prends en paramètre deux
        * variables de type String et détermine s'il ya de
        * points de liason possible entre ces 02 mots 
    */
    const 
        result = {},
        occurs = {};
            for( const word of word_a ) {
                const positions = [ ];
                let i = 0;
                    if ( word in result )
                        continue;
                            for( const cword of word_b ) {
                                if( cword === word )
                                    positions.push( i );
                                i++;
                            }
                if( positions.length !== 0 )
                    result[ word ] = positions;
            }
                for ( let item in result ) 
                    occurs[ item ] = Utils.allIndexOf( word_a, item );
        result.occurs = occurs;
        /** 
            * 
            * Cette retourne un object litteral 
            * qui contient un ensemble de clé qui
            * sont des lettres et ayant pour valeur le nombre
            * d'occurence dans le mot b
            * et des clés particulières qui sont
            * occurs qui contient chacunes des clés 
            * précedentes mais le nombre d'occurence 
            * dans le mot a cette foi
            * 
        */
    return result;
};

Utils.__search__link__ = function ( mlist ) {
    /**
        *
        * Cette fonction va determiner tous
        * les points de liaisons de chaque mots
        * avec tous les reste des mots de la liste
        * 
    */
    Utils.__storage__.sortedList = Utils.sortStringDesc( mlist );
    Utils.__storage__.organysed = Utils.__organyse__(
        Utils.__storage__.sortedList
    );

    let  i = 0, j = 0;
    const 
        linkList = {},
        list = Utils.__storage__.sortedList;
            for( ; i < list.length; i++ ) {
                const mword = list[ i ];
                    linkList[ mword ] = [ ];
                    j = 0;
                        for( ; j < list.length; j++ ) {
                            if( list[ j ] === mword )
                                continue;
                                    const _ = Utils.__ItsCanBeJoin__( mword, list[ j ] );
                                        if ( !Utils.isEmptyObject( _.occurs ) )
                                            linkList[ mword ].push(
                                                Utils.concatObject( _, {
                                                    word: list[ j ]
                                                } )
                                            );
                                            
                        }
            }
        Utils.__storage__.linkList = linkList;
    return linkList;
};

Utils.__get__all__possibility__ = function ( sorted, entry ) {
    const 
        result = [ ],
        expected = ( ( sorted.length - 1 ) * 3 ) + 1,
        merge = async function ( list, data ) {
            /**
                * data is an array
                * list is an array too 
            */ 
            for( const item of data ) {
                const word = item.word;
                    if ( list.indexOf( word ) === -1 ) {
                        /**
                            * occurs is an object which content 
                            * all ip 
                        */
                        const occurs = item.occurs;
                            for( const letter in item ) {
                                /**
                                    * Because in item there is
                                    * also key occurs and word 
                                */
                                if( letter.length === 1 ) {
                                    const letterMatch = item[ letter ];
                                    if( Array.isArray( letterMatch ) ) {
                                        for( const ep of letterMatch ) {
                                            for( const ip of occurs[ letter ] ) {
                                                const copy = Utils.cloneArray( list );
                                                    copy.push( ip );
                                                    copy.push( ep );
                                                    copy.push( word );
                                                if ( copy.length < expected ) {
                                                    merge(
                                                        copy,
                                                        entry[ word ]
                                                    );
                                                }
                                                else if ( copy.length === expected )
                                                    return result.push( copy );
                                            }
                                        }
                                    }
                                }
                            }
                    }
            }
        };
            for( const key in entry ) {
                const val = entry[ key ];
                merge( [ key ], val );
            }
    return result;
};

Utils.__get__space__ = function ( entry ) {
    const 
        links = Utils.__search__link__( entry ),
        sorted = Utils.sortStringDesc( entry ),
        AllPossibility = Utils.__get__all__possibility__( sorted, links );
            const spaces = [ ];
                    for( const item of AllPossibility ) {
                        const map = MapSpace( 0, 0 );
                            map.add( item[ 0 ], '', 0, 0 );
                                for ( let i = 1; i < item.length; i += 3 )
                                    map.add( item[ i + 2 ], item[ i - 1 ], item[ i ], item[ i+ 1 ] )
                        spaces.push( map );
                    } 
                const ordered = spaces.sort( function ( a, b ) {
                    return a.getCors() <= b.getCors() ? -1 : 1;
                } );
    return Choice( ordered );
};

Utils.__finalyse__ = function ( data, __canvas__sizes__ ) {
    const 
        entry = Utils.__get__space__( data ),
        sizes = entry.getSizes(),
        basex = Math.abs( sizes.min_x ),
        basey = Math.abs( sizes.min_y ),
        minx = ( ( __canvas__sizes__.width - ( ( sizes.width + 0.5 ) * PuzzSize ) ) / 40 ) + basex,
        miny = ( ( __canvas__sizes__.height - ( ( sizes.height + 1 ) * PuzzSize ) ) / 40 ) + basey;
            /**
                * we have to add +1 to qui to the table index
                * to the geometrical position 
            */
            for( let key in entry.cards.__str__ ) {
                entry.cards.__str__[ key ].x += minx;
                entry.cards.__str__[ key ].y += miny;
            }
        entry.getSizes();
    return entry;
};

Utils.__custom__entry__ = function ( list ) {
    return list.map( function ( val, index ) {
        return __get__key__( index ) + val.toLowerCase();
    } )  
};

Utils.__create_all__puzz__ = function ( list, getPuzz, __finalyse__data__ ) {
    const 
        __base__ = Utils.__custom__entry__( list ),
        entry = Utils.__finalyse__( __base__, __finalyse__data__ ),
        data = entry.getData(),
        save = { },
        puzz = {};
            for( let key in data ) {
                let i = 0, j = 0; 
                const 
                    item = data[ key ],
                    orient = item.orient,
                    tabkey = key.substring( 1 );
                    puzz[ tabkey ] = [ ];
                        if ( orient === 1 ) {
                            const x = item.x * PuzzSize;
                            let y = item.y * PuzzSize;
                                for ( ; i < item.height; i++ ) {
                                    BorderModel.args.isMain = false;
                                    PuzzModel.args.isMain = false;
                                    PuzzModel.args.word = ' ';
                                    if ( i == 0 ) {
                                        BorderModel.args.isMain = true;
                                        PuzzModel.args.isMain = true;
                                        PuzzModel.args.word = __get__key__index__( key[ i ] );
                                        puzz[ tabkey ].push( 
                                            getPuzz( x, y )
                                                .addModel( BorderModel )
                                                .addModel( PuzzModel ) 
                                                .on( 'click', Utils.__main__puzz__handle__ )
                                        );
                                    } else {
                                        puzz[ tabkey ].push( 
                                            getPuzz( x, y )
                                                .addModel( BorderModel )
                                                .addModel( PuzzModel )
                                        );
                                    }
                                    y += PuzzSize;
                                }
                        } else {
                            const y = item.y * PuzzSize;
                            let x = item.x * PuzzSize;
                                for ( ; j < item.width; j++ ) {
                                    BorderModel.args.isMain = false;
                                    PuzzModel.args.isMain = false;
                                    PuzzModel.args.word = ' ';
                                    if ( j == 0 ) {
                                        BorderModel.args.isMain = true;
                                        PuzzModel.args.isMain = true;
                                        PuzzModel.args.word = __get__key__index__( key[ j ] );
                                        puzz[ tabkey ].push( 
                                            getPuzz( x, y )
                                                .addModel( BorderModel )
                                                .addModel( PuzzModel ) 
                                                .on( 'click', Utils.__main__puzz__handle__ )
                                        );
                                    } else {
                                        puzz[ tabkey ].push( 
                                            getPuzz( x, y )
                                                .addModel( BorderModel )
                                                .addModel( PuzzModel ) 
                                        );
                                    }
                                    x += PuzzSize;
                                }
                        }
                save[ __get__key__index__( key[ 0 ] ) ] = key.substring( 1 );
            }
    return {
        puzz: puzz,
        list: save
    };
};

Utils.Contents = {
    sorted: [ ],
    map: { },
    storage: { },
    set: function ( __data__ ) {
        this.map = __data__.list;
        this.storage = __data__.puzz;
    },
    getKey: function ( name ) {
        for( let i in this.map ) {
            if ( this.map[ i ] === name )
                return i;
        }
    }
};

Utils.__write__ = function ( index, value ) {
    if( !Utils.isEmptyObject( Utils.Contents.map ) ) {
        let realValue = value;
        const 
            id = index,
            appropriateWord = Utils.Contents.map[ id ];
            if( appropriateWord.length > realValue.length ){
                for( let i = realValue.length; i <= appropriateWord.length; i++ )
                    realValue = realValue.concat( " " );
            }
                const needed = Utils.Contents.storage[ appropriateWord ];
                    for ( let index = 1; index < needed.length; index++ ) {
                        const Space = needed[ index ];
                            PuzzModel.args.word = realValue[ index - 1 ];
                            Space.addModel( PuzzModel );
                    }
            KeyVal[ id ] = realValue;
        return this;
    }
    return this;
};

Utils.__untrought__ = function ( index ) {
    return Items[ index ].removeClass( 'stroke' );
};

Utils.__clear__ = function ( index ) {
    Utils.__write__( index, ' ' );
        Utils.__untrought__( index );
            delete KeyVal[ index ];
    return this;
};

apis.open = function () {
    return this.el.css( 'display', 'flex' );
};

apis.close = function () {
    return this.el.hide();
};

Utils.__init__api__ = function () {
    apis.open();
};

Utils.__mix__word__ = function ( list ) {
    const result = list;
    let el = '';
        for ( let index = 0; index < list.length - 1; index++ ) {
            el = result[ index ];
            result[ index ] = result[ index + 1 ];
            result[ index + 1 ] = el;
        }
    return result;
};

Utils.__main__puzz__handle__ = function ( id ) {
    Utils.selected = id;
        if( !( id in KeyVal ) )
            return Utils.__init__api__();
                else 
                    return Utils.__clear__( id ); 
};

Utils.__init_action__ = function ( list ) {
    for ( const item of list ) {
        item.on( 'click', function () {
            return Utils.__main__puzz__handle__( item.word, item );
        } );
    }
    return ( function ( $ ) {
        $( '.api-list-item' ).each( function () {
            $( this ).click( function ( e ) {
                const 
                    node = $( this ),
                    key = node.attr( 'data-key' );
                if ( !node.hasClass( 'stroke' ) ) {
                    node.addClass( 'stroke' );
                    Items[ Utils.selected ] = node;
                            apis.close();
                        Utils.__write__( Utils.selected, key );
                    return e.stopPropagation();
                }
            } );
        } );
    } )( Digital );
};

Utils.__underline__ = function ( key, color ) {
    const data = Utils.Contents.storage[ key ];
        for ( const item of data ) {
            if ( !item.isMain ) {
                PuzzFillModel.args.color = color;
                item.addModel( PuzzFillModel );
            }
        }    
    return data;
};

Utils.verify = function () {
    for ( let option in Utils.Contents.map ) {
        const item = Utils.Contents.map[ option ];
            if ( KeyVal[  option ] !== item ) {
                Utils.__underline__( item, Color.false );
                Utils.result -= 1;
            } else {
                Utils.__underline__( item, Color.true );
            }
    } 
};

Utils.initList = function () {
    const 
        data = Utils.Contents.sorted,
        els = Digital( '.main-list-item' ),
        others = Digital( '.api-list-item' );
            apis.el = Digital( '.api-items' );
            apis.el.on( 'click', function () {
                apis.close();
            } );
            els.each( function ( index ) {
                const key = ( '' + ( index + 1 ) ).concat( '. ' ).concat( data[ index ] );
                    others.n( index ).text( key ).attr( 'data-key', data[ index ] );
                return $( this ).text(
                    key
                ).attr( 'data-key', key );
            } );
    return data;
};

Utils.__init__engine = function ( list, getPuzz, __finalyse__data__ ) {
    const 
        graph = Utils.__create_all__puzz__( list, getPuzz, __finalyse__data__ ),
        result = [ ];
            Utils.Contents.set( graph );
                for( let item in Utils.Contents.storage ) {
                    const data = Utils.Contents.storage[ item ];
                    result.push( data[ 0 ] );
                }
                Utils.__init_action__( result );
            Utils.Contents.sorted = Utils.__mix__word__( list, Utils.Contents.map );
        Utils.initList();
    return this;
};

Digital( function ( $ ) {
    const entry = [];
    let
        actions = 0,
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
                Utils.verify();
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
                } );
            } );  
        },
        init = function () {
                initEngine();
            return initEvent();
        };
    $.setStorage( 'entry', JSON.stringify( [ 'souris', 'clavier', 'ecran', 'unite centrale', 'port usb' ] ) );
    return ( function ( $ ) {
        let data = $.getStorage( 'entry' );
            if ( data !== null ) {
                const __arr__ = JSON.parse( data );
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