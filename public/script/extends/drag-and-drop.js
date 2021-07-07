$$.setStorage( "entry", JSON.stringify( [
    {
        word: "Permet de connecter l'écran à l'unité centrale",
        imgs: {
            '/img/game/Rj45 connectuer.png': false,
            '/img/game/connecteur_hdmi.png': false,
            '/img/game/connecteur_vga.png': true,
            '/img/game/usb_typeC.png': false
        }
    },
    {
        word: "n'est pas un périphérique de sortie.",
        imgs: {
            '/img/game/Baffle_Jbl_jack.png': false,
            '/img/game/casque_jack2.png': false,
            '/img/game/Sd Card connectuer.png': true,
            '/img/game/souris.png': true
        }
    }
] ) );


const 
    Storage = {},
    OptionList = [ ],
    PictureList = [ ],
    MoveStore = { 
        targeted: false
    },
    Dropper = {
        i: 0,
        fx: {},
        add: function ( node, func ) {
            this.fx[ this.i ] = {
                node: node,
                fx: func 
            };
            this.i++;
        },
        each: async function ( fx ) {
            return Digital.each( this.fx, fx );
        },
        verify: function ( x, y ) {
            let target = false;
                this.each( function () {
                    if ( this.fx( x, y ) )
                        target = this.node;
                } );
            return target;
        }
    },
    addItems = function ( entry ) {
        let i = 0;
        const 
            arr = Digital( '.content-img-option' ),
            imgs = entry.imgs,
            word = entry.word;
                for ( let src in imgs ) {
                    const 
                        val  = imgs[ src ],
                        node = arr.n( i ),
                        picture = Digital( '<div />' ).className( 
                            'content-img justify-content-center align-items-center' 
                        ).attr( {
                            draggable: 'false',
                            'data-word': val ? word : src[ 0 ]
                        } );
                                picture.append( '<img />' ).src( src ).className( 'img img-responsive' ).attr( {
                                    draggable: 'false'
                                } );
                                node.append( picture );
                                    Utils.__active__picture__( picture.id( 'qe-' + i ) );
                            Utils.__active__dropper__( node, picture );
                        OptionList.push( node );
                    PictureList.push( picture );
                    i++;
                }
            Storage.word = word;
            Digital( '.content-text' ).text( word );
        return Storage;
    };

Utils.table = null;
Utils.__ative__table__ = function () {
    Utils.table = Digital( '.table' );
    Utils.table.addEventListener( 'mousemove', function ( e ) {
        if ( MoveStore.targeted ) {
            const
                x = e.screenX - MoveStore.cx,
                y = e.screenY - MoveStore.cy;
                MoveStore.x = x + MoveStore.rect.left;
                MoveStore.y = y + MoveStore.rect.top;
            MoveStore.target.css( {
                left: MoveStore.x + 'px',
                top: MoveStore.y + 'px',
                display: 'flex'
            } );
        }
    } );

    Utils.table.addEventListener( 'touchmove', function ( e ) {
        if ( MoveStore.targeted ) {
            const
                x = e.touches[ 0 ].screenX - MoveStore.cx,
                y = e.touches[ 0 ].screenY - MoveStore.cy;
                MoveStore.x = x + MoveStore.rect.left;
                MoveStore.y = y + MoveStore.rect.top;
            MoveStore.target.css( {
                left: MoveStore.x + 'px',
                top: MoveStore.y + 'px',
                display: 'flex'
            } );
        }
    } );
};

Utils.__add__table__ = function ( obj ) {
    this.table.prepend( obj );
};

Utils.__dispatch__event__ = function ( node, data ) {
    const event = new CustomEvent( 'drop.data', {
        detail: {
            word: data
        }
    } );
    return node.dispatchEvent( event );
}

Utils.__end__drag__ = function () {
    if ( MoveStore.target && MoveStore.x ) {
        try {
            const 
                result = Dropper.verify( MoveStore.x, MoveStore.y ),
                data = MoveStore.target.attr( 'data-word' );
                try {
                    MoveStore.target.remove();
                } catch( e ) {}
                    if ( Digital.isFunction( result.isSame ) && !result.isSame( MoveStore.parent[ 0 ] ) )
                        result ? Utils.__dispatch__event__( result, data ) : this;
        } catch ( e ) {}
        delete MoveStore.target;
        delete MoveStore.obj;
        delete MoveStore.parent;
        delete MoveStore.cx;
        delete MoveStore.cy;
        delete MoveStore.ct;
        delete MoveStore.x;
        delete MoveStore.y;
        MoveStore.targeted = false;
    }
    return this;
};

Utils.__active__picture__ = function ( picture ) {
    picture.on( {
        mousedown: function ( e ) {
            const rect = picture.getBoundingClientRect();
            MoveStore.obj = picture;
                MoveStore.parent = MoveStore.obj.parent();
                MoveStore.targeted = true;
                    MoveStore.cx = e.screenX;
                    MoveStore.cy = e.screenY;
                    MoveStore.rect = rect;
                    MoveStore.target = MoveStore.obj.clone();
                Utils.__add__table__( MoveStore.target );
            return MoveStore.target.css( {
                zIndex: 140,
                position: 'fixed',
                display: 'none'
            } ).on( {
                mouseleave: function () {
                    MoveStore.targeted = false;
                    return Utils.__end__drag__();
                },
                mouseup: function () {
                    MoveStore.targeted = false;
                    return Utils.__end__drag__();
                }
            } );
        },
        touchstart: function ( e ) {
            const rect = picture.getBoundingClientRect();
            MoveStore.obj = picture;
                MoveStore.parent = MoveStore.obj.parent();
                MoveStore.targeted = true;
                    MoveStore.cx = e.touches[ 0 ].screenX;
                    MoveStore.cy = e.touches[ 0 ].screenY;
                    MoveStore.rect = rect;
                    MoveStore.target = MoveStore.obj.clone();
                    MoveStore.ct = Utils.MainContainer.scrollTop();
                Utils.__add__table__( MoveStore.target );
            return MoveStore.target.css( {
                zIndex: 140,
                position: 'fixed',
                display: 'none'
            } ).on( {
                touchleave: function () {
                    MoveStore.targeted = false;
                    return Utils.__end__drag__();
                },
                touchcancel: function () {
                    MoveStore.targeted = false;
                    return Utils.__end__drag__();
                }
            } );
        }
    } );
    return this;
};

document.addEventListener( 'touchend', function () {
    MoveStore.targeted = false;
    return Utils.__end__drag__();
} );

document.addEventListener( 'touchcancel', function () {
    MoveStore.targeted = false;
    return Utils.__end__drag__();
} );

document.addEventListener( 'touchleave', function () {
    MoveStore.targeted = false;
    return Utils.__end__drag__();
} );

Utils.__active__dropper__ = function ( node ) {
    Dropper.add( node, function ( x, y ) {
        const 
            marge = 30,
            rects = node.getClientRects(),
            rect = rects[ 0 ];
        if ( x >= rect.left - marge  && x <= ( rect.left + rect.width + marge ) ) {
            if ( y >= rect.top - marge && y <= ( rect.top + rect.height + marge ) )
                return true;
        }
    } );
    return node.on( 'drop.data', function () {
        const 
            last = node.first( true ),
            pels = last.clone(),
            nels = MoveStore.obj.clone().css( {
                zIndex: 10,
                position: 'relative',
                left: '0px',
                top: '0px'
            } );
                Utils
                    .__active__picture__( nels )
                    .__active__picture__( pels );
                if ( nels.id() === pels.id() )
                    return;
            node.empty().append( nels );
        return MoveStore.parent.empty().append( pels );
    } );
};

Utils.els = null;
Utils.__active__main__ = function ( main ) {
    /** 
        * to ative event to
        * the main box 
    */
    Dropper.add( main, function ( x, y ) {
        const 
            marge = 30,
            rects = main.getClientRects(),
            rect = rects[ 0 ];
        if ( x >= rect.left - marge  && x <= ( rect.left + rect.width + marge ) ) {
            if ( y >= rect.top - marge && y <= ( rect.top + rect.height + marge ) )
                return true;
        }
    } );

    Utils.MainContainer.on( 'scroll', function ( e ) {
        if ( MoveStore.targeted ) {
            const top = Utils.MainContainer.scrollTop() - MoveStore.ct;
            Utils.MainContainer.scrollTo( 0, MoveStore.ct += ( -1 * top * 0.75 ) );
        }
    } );

    return main.on( 'drop.data', function ( e ) {
        Utils.result = e.detail.word === Storage.word;
        return main.empty().append( MoveStore.obj.clone().css( {
            zIndex: 10,
            position: 'relative',
            left: '0px',
            top: '0px'
        } ) );
    } );
};

Utils.MainOption = null;
Utils.MainContainer = null;
Utils.result = false;
Utils.__init__ = function ( entry ) {
    Utils.MainContainer = Digital( '.main-container' );
    Utils.__ative__table__();
    addItems( entry );
    Utils.MainOption = Digital( '.main-option' );
    Utils.__active__main__(
        Utils.MainOption
    );
};

Digital( function ( $ ) {
    const
        data = $.getStorage( 'entry' ),
        entry = JSON.parse( data || { } )[ randIn( 1, 2 ) - 1 ];
        Utils.__init__( entry );
    return $( '#next-button' ).click( function () {
        addFinal( Utils.result ? 5 : 0, 5 );
        $( '.content-result' ).text( Utils.result ? 'Objectif atteint' : 'Objectif manqué' );
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
} );