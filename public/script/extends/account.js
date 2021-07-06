Digital( function ( $ ) {
    $( '#connection, #inscription' ).each( function () {
        const 
            base = '/routes/account/',
            node = $( this ),
            id = node.id();
        return node.click( function () {
            window.location = base.concat( id );
        } );
    } );

    return ( function ( $ ) {
        const 
            Storage = {
                icon: '/img/person.svg'
            },
            contentData = $( '[data-form]' ),
            type = contentData.attr( 'data-form' ),
            analysePseudo = function ( pseudo ) {
                const reg = /^[a-z0-9_\-]{1,}$/i;
                    if ( !reg.test( pseudo ) )
                        return "Le pseudo peut juste contenir des lettres, des chiffres, des tirets ou des underscores"; 
                return true;
            },
            Error = {
                field: $( '.content-error' ),
                add: function ( message ) {
                    return this.field.empty().append( '<span />', {
                        text: message 
                    } );
                },
                empty: function () {
                    return this.field.empty();
                }
            },
            Manager = {
                inits: {
                    __general__init__: function () {
                        return $( '.filled-field' ).each( function () {
                            const 
                                node = $( this ),
                                name = node.name();
                                    Storage[ name ] = node.value();
                            return node.input( function () {
                                Storage[ name ] = this.value;
                            } );
                        } );
                    },
                    __init__for__inscription__: function () {
                        const 
                            img = $( '.user-icon' ),
                            file = $( '#file' );
                                this.__general__init__();
                                file.change( function () {
                                    $( this ).files().each( function () {
                                        $( this ).read( 'url' ).load( function () {
                                            const url = this.result;
                                                Storage[ 'icon' ] = url;
                                            return img.src( url );
                                        } );
                                    } );
                                } );
                        return $( "#submit" ).click( function () {
                            Manager.submits.__for__inscription__();
                        } );
                    },
                    __init__for__connection__: function () {
                        this.__general__init__();
                        return $( "#submit" ).click( function () {
                            Manager.submits.__for__connection__();
                        } );
                    },
                    __init__account__: function () {
                        const route = '/routes/account/modify';
                        return $( "#modify" ).click( function () {
                            window.location = route;
                        } );
                    },
                    init: function ( type ) {
                        if ( type === 'inscription' ) {
                            return this.__init__for__inscription__();
                        } else {
                            if ( type === 'connection' ) {
                                return this.__init__for__connection__();
                            } else {
                                return this.__init__account__();
                            } 
                        }
                    }
                },
                submits: {
                    __for__inscription__: function () {
                        const result = Manager.analyse.__inscription__();
                            if ( result === true ) {
                                /** 
                                    * now we can send data
                                    * to the server 
                                */
                                    /** 
                                            * Here we can send 
                                            * information for inscription 
                                        */
                                     Digital.setStorage( 'user', JSON.stringify(
                                        Storage
                                    ) );
                                    window.location = '/';
                                return Error.empty();
                            } else {
                                Error.add( result );
                            }
                        return result;
                    },
                    __for__connection__: function () {
                        const result = Manager.analyse.__connection__();
                            if ( result === true ) {
                                /** 
                                    * now we can send data
                                    * to the server 
                                */
                                try {
                                    const data = JSON.parse(
                                        Digital.getStorage( 'user' )
                                    );

                                    if ( Storage.pseudo === data.pseudo && Storage.password === data.password ) {
                                        window.location = '/';
                                    } else {
                                        Error.add( 'Compte non trouvé' );
                                    }
                                } catch( e ) { }
                                return Error.empty();
                            } else {
                                Error.add( result );
                            }
                        return result;
                    }
                },
                analyse: {
                    __inscription__: function () {
                        if( ( Storage.name || '' ).length < 3 ) {
                            return 'Nom trop court';
                        } else {
                            if( ( Storage.surname || '' ).length < 3 ) {
                                return 'Prenom trop court';
                            } else {
                                if( ( Storage.password || '' ).length < 5 ) {
                                    return 'Le mot de passe doit contenir aumoins 5 caractères';
                                } else {
                                    if( Storage.password !== Storage.rpassword ) {
                                        return 'Les 02 mots de passe sont différents';
                                    } else {
                                        /** 
                                            * here we can manage the 
                                            * pseudo 
                                        */
                                       return analysePseudo( Storage.pseudo );
                                    }
                                }
                            }
                        }
                    },
                    __connection__: function () {
                        if( ( Storage.password || '' ).length < 5 ) {
                            return 'Le mot de passe doit contenir aumoins 5 caractères';
                        } else {
                            /** 
                                * here we can manage the 
                                * pseudo 
                            */
                            return analysePseudo( Storage.pseudo );
                        }
                    }
                }
            };
        return Manager.inits.init( type );
    } )( $ );
} );