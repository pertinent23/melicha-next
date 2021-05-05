( function ( wn ) {
    /**
     * 
        * @param {Object} list 
        * we will use the fonction
        * to import all object created
        * in this file
    */
    function exportAll ( list ) {
        for( let name in list ) 
            wn[ name ] = list[ name ];
    };

    const 
        /** 
            * this object content
            * all object created 
            * in this file
            * in its property .list 
        */
        ContentObject = {
            list: { },
            add: function ( name, obj ) {
                    this.list[ name ] = obj;
                return this;
            },
            addAll: function ( list ) {
                if( typeof list === 'object' ) {
                    for( let key in list ) 
                        this.add( key, list[ key ] );
                }
            }
        },
        /** 
            * We use Storage to store
            * data during calc  
        */
        Storage = {
            data: {},
            add: function ( key, val ) {
                    this.data[ key ] = val;
                return this;
            },
            get: function ( key ) {
                return this.data[ key ];
            },
            addAll: function ( list ) {
                if( typeof list === 'object' ) {
                    for ( const [ key, val ] of list )
                        this.add( key, val );
                }
                return this;
            }
        },
        /** 
            *@param {String} val 
        */
        shave = function ( val ) {
            return parseFloat(
                val.replace( /a-z/ig, '' )
            );
        },
        Coord = function ( x, y, width, height ) {
            return {
                x: x, y: y,
                width: width,
                height: height,
                initObj: function ( obj ) {
                    obj.x = x;
                    obj.y = y;
                    obj.width = width;
                    obj.height = height;
                },
                isInner: function ( x, y ) {
                    if ( x >= this.x && x <= this.x + this.width ) {
                        if ( y >= this.y && y <= this.y + this.height ) 
                            return true;
                    }
                    return false;
                },
                getX: function () {
                    return this.x;
                },
                getY: function () {
                    return this.y;
                },
                getWidth: function () {
                    return this.width;
                },
                getHeight: function () {
                    return this.height;
                },
                setX: function ( x ) {
                    this.x = x;
                },
                setY: function ( y ) {
                    this.y = y;
                },
                setWidth: function ( width ) {
                    this.width = width;
                },
                setHeight: function ( height ) {
                    this.height = height;
                },
                clone: function () {
                    return Coord( 
                        x, y, 
                        width, 
                        height 
                    );
                }
            };
        };
    
    const
        Board = function ( canvas ) {
            this.canvas = canvas;
            this.activeEvents = [];
            this.portions = [ ];
            this.width = 0;
            this.height = 0;
            this.node = null;
            this.context = null;

            this
                .init()
                .loadSizes()
                .clear();
        },
        /** 
         * @param {Board} board,
         * @param {Object} coord
        */
        Portion = function ( board, coord ) {
            this.board = board;
            this.coord = coord;
            this.implemented = { };
            this.width = 0;
            this.height = 0;
            this.x = 0;
            this.y = 0;
            this.init();
        };

        Board.prototype = {
            init: function () {
                this.node = this.canvas[ 0 ];
                    this.context = this.node.getContext( '2d' );
                return this;  
            },
            loadSizes: function () {
                this
                    .setHeight( this.getHeight() )
                    .setWidth( this.getWidth() );
                return this;
            },
            setDimention: function ( dimention, val ) {
                this[ dimention ] = val;
                this.canvas
                    .css( 
                        dimention, 
                        "".concat( val ).concat( 'px' ) 
                    );
                return this;
            },
            setHeight: function ( val ) {
                    this.setDimention( 'height', val );
                return this;
            },
            setWidth: function ( val ) {
                    this.setDimention( 'width', val );
                return this;
            },
            getWidth: function () {
                return shave( this.canvas.attr( 'width' ) );
            },
            getHeight: function () {
                return shave( this.canvas.attr( 'height' ) );
            },
            addPortion: function ( obj ) {
                if ( obj instanceof Portion ) 
                    this.portions.push( obj );
                return this;
            },
            clear: function () {
                this.portions = [];
                this.activeEvents = [];
            },
            isActiveEvents: function ( event ) {
                return this.activeEvents.indexOf( event ) !== -1;
            },
            getSizeX: function ( x ) {
                return ( this.getWidth() * x ) / this.canvas.offsetWidth();  
            },
            getSizeY: function ( y ) {
                return ( this.getHeight() * y ) / this.canvas.offsetHeight();  
            },
            addListenerFor: function ( event ) {
                const obj = this;
                    if( obj.activeEvents.indexOf( event ) === -1 ) {
                        obj.activeEvents.push( event );
                        obj.canvas.on( event, async function ( e ) {
                            let
                                x = obj.getSizeX( e.offsetX ),
                                y = obj.getSizeY( e.offsetY ),
                                list = obj.getPortions(), item;
                                    for( item of list ) 
                                        obj.verify( item, x, y, e.type );
                            return this;
                        } );
                    }
                return this;
            },
            verify: async function ( item, x, y, eventn ) {
                if( item.implement( eventn ) ) {
                    if ( item.maches( x, y ) )
                        return item.dispach( eventn );
                }
            },
            addEvent: function ( event ) {
                if( !isActiveEvents( event ) ) {
                        this.activeEvents.push( event );
                    this.addListenerFor( event );
                }
            },
            getPortions: function () {
                return this.portions;
            },
            getContext: function () {
                return this.context;
            }
        };

        Portion.prototype = {
            init: function () {
                this.getCoord().initObj( this );
                    this.getBoard().addPortion(
                        this
                    );
                return this;
            },
            implement: function ( event_name ) {
                return typeof this.implemented[ event_name ] === 'function';
            },
            maches: function ( x, y ) {
                return this.getCoord().isInner(
                    x, y
                );
            },
            getBoard: function () {
                return this.board;
            },
            getCoord: function () {
                return this.coord;
            },
            addListener: function ( event, handle ) {
                    this.implemented[ event ] = handle;
                        this.getBoard().addListenerFor( event );
                return this;
            },
            dispach: function ( event ) {
                return this.implemented[ event ].call( this, { } );
            },
            getContext: function () {
                return this.getBoard().getContext();
            }
        };
    
    const DrawSpace = function ( board, coord ) {
        this.initialCoord = coord;
        this.coord = coord.clone();
        this.portion = new Portion( board, coord );
        this.models = [];
        this.init();
    };

    DrawSpace.prototype = {
        props: { },
        init: function () {
            const obj = this;
                this.getPortion().dispach = function ( event ) {
                    return this.implemented[ event ].call( this, obj );
                };  
            return obj;
        },
        getArgs: function () {
            return this.args;
        },
        addKeyArgs: function ( key, val ) {
            this[ key ] = val;
        },
        addModel: function ( model ) {
            for( let item in model.args ) 
                this.addKeyArgs( item, model.args[ item ] );
                    this.models.push(
                        model.modelyse( this.getPortion() )
                    );
            return this;
        },
        clear: function () {
            this.models = [];
            this.coord = this.initialCoord.clone();
        },
        getModels: function () {
            return this.models;
        },
        reinitialyse: function () {
            const 
                models = this.getModels().concat( [ ] );
                this.clear();
                    for( const model of models )
                        this.addModel( model );
            return this;
        },
        getPortion: function () {
            return this.portion;
        },
        getCoord: function () {
            return this.initialCoord;
        },
        on: function ( event, handle ) {
                this.getPortion().addListener( event, handle );
            return this;
        }
    };

    const DefineModel = function ( wconsum, hconsum, handle, args ) {
        return {
            wconsum: wconsum,
            hconsum: hconsum,
            handle: handle,
            context: null,
            portion: null,
            coord: null,
            args: args || { },
            init: function ( portion ) {
                this.context = portion.getContext();
                this.coord = portion.getCoord();
            },
            modelyse: function ( portion ) {
                this.setPortion( portion );
                this.init( portion );
                    this.finalyse();
                    this.reduce();
                return this;
            },
            setPortion: function ( portion ) {
                this.portion = portion;
            },
            reduce: function () {
                const 
                    w = this.wconsum,
                    h = this.hconsum;
                        this.getCoord().setWidth( this.getCoord().getWidth() - w );
                        this.getCoord().setHeight( this.getCoord().getHeight() - h );
                        this.getCoord().setX( this.getCoord().getX() - ( w / 2 ) );
                        this.getCoord().setY( this.getCoord().getY() - ( h / 2 ) );
                return this;
            },
            finalyse: function () {
                return this.handle.call( this.context,
                    this.coord.getX(),
                    this.coord.getY(),
                    this.coord.getWidth(),
                    this.coord.getHeight(),
                    this.args
                );  
            },
            getCoord: function () {
                return this.coord;
            },
            setArgs: function ( args ) {
                this.args = args;
            }
        };
    };

    const MapSpace = function ( width, height ) {
        /*
           * 0 for horizontal
           * 1 for vertical
        */
        return {
            list: [ ],
            map: {
                list: [],
                height: width || 0,
                width: height || 0,
                position: 1,
                el: '',
            },
            cards: {
                __str__: {},
                __data__: {
                    min_x: 0, max_x: 0,
                    max_y: 0, min_y: 0,
                    set: function ( minx, miny, maxx, maxy ) {
                        this.max_x = maxx;
                        this.min_x = minx;
                        this.max_y = maxy;
                        this.min_y = miny;
                    }
                },
                add: function ( el, w, ip, ep, orient ) {
                    if ( el && !w ) {
                        this.__data__.set( 0, 0, 1, el.length );
                            this.__str__[ el ] = {
                                x: 0, y: 0,
                                width: 1, height: el.length,
                                orient: orient || 1
                            };
                        return this;
                    }
                    else{
                        const base = this.getBase( w, ip ); 
                        const final = this.getFinalData( el, ep, orient, base );
                            this.__str__[ el ] = {
                                x: final.x, y: final.y,
                                width: final.width, height: final.height,
                                orient: orient
                            };
                        return this;

                    }
                },
                getBase: function ( w, ip ) {
                    const val = this.__str__[ w.el ];
                    const orient = val.orient;
                        let 
                            x = orient === 1 ? val.x : val.x + ip,
                            y = orient === 1 ? val.y + ip : val.y;
                    return {
                        x: x,
                        y: y
                    };
                },
                getFinalData: function ( el, ep, orient, base ) {
                    let 
                        x, y,
                        width, height;
                            if ( orient === 1  ) {
                                x = base.x;
                                width = 1;
                                y = base.y - ep;
                                height = el.length;
                            } else {
                                x = base.x - ep;
                                width = el.length;
                                y = base.y;
                                height = 1;
                            }
                    return {
                        x: x, y:y,
                        width: width, 
                        height: height
                    };
                },
                getSizes: function () {
                    const
                        xs = [],
                        ys = [],
                        __str__ = this.__str__;
                            for( const item in __str__ ) {
                                const data = __str__[ item ];
                                    xs.push( data.x );
                                    xs.push( data.x + data.width );
                                    ys.push( data.y );
                                    ys.push( data.y + data.height );
                            }

                            const 
                                sorted_x = Utils.sort( xs ),
                                sorted_y = Utils.sort( ys ),
                                maxWidth = sorted_x[ sorted_x.length - 1 ] - sorted_x[ 0 ],
                                maxHeight = sorted_y[ sorted_y.length -1 ] - sorted_y[ 0 ];
                                    this.__data__.set( 
                                        sorted_x[ 0 ], sorted_y[ 0 ],
                                        sorted_x[ sorted_x.length -1 ],
                                        sorted_y[ sorted_y.length - 1 ] 
                                    );
                    return Utils.concatObject( {
                        height: maxHeight,
                        width: maxWidth
                    }, this.__data__ );
                }
            },
            height: width || 0,
            width: height || 0,
            clone: function () {
                const obj = MapSpace( this.width, this.height );
                    obj.list = this.list;
                    obj.cards = this.cards;
                    obj.map = this.map;
                return obj;
            },
            search: function ( el, obj ) {
                if( el === obj.el ) {
                    return obj;
                } else{
                    for( const item of obj.list ) {
                        if( item.el !== el ) {
                            const result = this.search( el, item );
                                if( result )
                                    return result;
                            continue;
                        }
                        return item;
                    }
                }
                return false;
            },
            add: function ( el, where, ipos, elpos ) {
                this.list.push( el );
                    if( where ) {
                        const 
                            data = this.search( where, this.map );
                        this.addDimension( data.position, el, data, ipos, elpos );
                    }
                    else {
                        const
                            data = this.map;
                                data.el = el;
                                data.position = 1;
                                data.height = el.length;
                                data.width = 1;
                        this.cards.add( el );
                    }
                return this;
            },
            addDimension: function ( orient, el, where, ip, ep  ) {
                const orientation = orient ? 0 : 1;
                    /** 
                        * ip la position sur l'element root
                        * ep la postion sur l'element lui meme 
                    */
                    where.list.push( {
                        list: [],
                        ip: ip,
                        ep: ep,
                        position: orientation,
                        el: el,
                    } );
                    this.addCard( el, where, ip, ep, orientation );
                return this;
            },
            getList: function () {
                return this.list;
            },
            addCard: function ( el, where, ip, ep, orient ) {
                return this.cards.add( el, where, ip, ep, orient );
            },
            getSizes: function () {
                return this.cards.getSizes();
            },
            getCors: function () {
                const data = this.getSizes();
                return data.height - data.width;
            },
            getData: function () {
                return this.cards.__str__;
            }
        };
    };

    const Utils = {
        sortStringDesc: function ( list ) {
            return list.sort( function ( a, b ) {
                return a.length >= b.length ? -1 : 1;
            } );
        },
        sortDesc: function ( list ) {
            return list.sort( function ( a, b ) {
                return a >= b ? -1 : 1;
            } );
        },
        sortString: function ( list ) {
            return list.sort( function ( a, b ) {
                return a.length <= b.length ? -1 : 1;
            } );
        },
        sort: function ( list ) {
            return list.sort( function ( a, b ) {
                return a <= b ? -1 : 1;
            } );
        },
        isEmptyObject: function ( obj ) {
            for( let item in obj )
                return false;
            return true;
        },
        allIndexOf: function ( tab, el ) {
            let i = 0;
            const 
                result = [ ];
                    for( const word of tab ) {
                        if( word === el )
                            result.push( i );
                        i++;
                    }
            return result;
        },
        concatObject: function ( obj1, obj2 ) {
            for( let item in obj2 )
                obj1[ item ] = obj2[ item ];
            return obj1;
        },
        cloneArray: function ( arr ) {
            const result = [];
                for( const item of arr )
                    result.push( item );
            return result;
        }
    };

        ContentObject.addAll( {
            Board: Board,
            Portion: Portion,
            DrawSpace: DrawSpace,
            Coord: Coord,
            shave: shave,
            DefineModel: DefineModel,
            MapSpace: MapSpace,
            Storage: Storage,
            Utils: Utils,
            apis: { }
        } );
    return exportAll( ContentObject.list );
} )( window );