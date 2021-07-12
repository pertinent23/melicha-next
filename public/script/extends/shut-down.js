const Colors = {
    border1: "#3E5959",
    border2: "#547983",
    full: "#293939",
    blue: "#159BE1", 
    green: "#58BE7C",
    red: "#FF1122",
    black: "#000000",
    white: "#FFFFFF"
};

const Drawer = {
    context: null,
    status: 'off',
    state: 'initial',
    screen: { x: 0, y: 0 }, 
    showScreen( color ) {
        const context = this.context;
            context.strokeStyle = context.fillStyle = color;
            context.lineWidth = 5;
            context.lineCap = "round";
            context.beginPath();
                context.moveTo( 100, 115 );
                context.lineTo( 340, 115 );
                context.lineTo( 340, 250 );
                context.lineTo( 100, 250 );
                context.lineTo( 100, 115 );
                context.closePath();
            context.fill();
            context.stroke();
        return this;
    },
    drawScreen() {
        const context = this.context;
            context.strokeStyle = context.fillStyle = Colors.border2;
            context.lineWidth = 5;
            context.beginPath();
            context.moveTo( 110, 100 );
                context.lineTo( 330, 100 );
                context.arcTo( 350, 100, 350, 110, 10 );

                context.lineTo( 350, 260 );
                context.arcTo( 350, 280, 340, 280, 10 );

                context.lineTo( 110, 280 );
                context.arcTo( 90, 280, 90, 260, 10 );

                context.lineTo( 90, 120 );
                context.arcTo( 90, 100, 110, 100, 10 );
            context.fill();

            context.strokeStyle = context.fillStyle = Colors.full;
            context.lineJoin = "round";
            context.beginPath();
                const 
                    x = 115 + 90 - 5, 
                    width = 115 + 90 + 40;
                context.moveTo( x, 282 );
                context.lineTo( width, 282 );
                context.lineTo( width, 320 );
                context.lineTo( x, 320 );
                context.lineTo( x, 282 );
                context.closePath();
            context.fill();
            context.stroke();

            context.strokeStyle = context.fillStyle = Colors.border2;
            context.lineWidth = 10;
            context.lineCap = "round";
            context.beginPath();
                context.moveTo( x - 20, 320 );
                context.lineTo( width + 20, 320 );
            context.stroke();

            this.showScreen( Colors.black );
        return context;
    },
    drawUPC() {
        const context = this.context;
            context.strokeStyle = context.fillStyle = Colors.border1;
            context.lineWidth = 8;
            context.lineCap = "round";
            context.beginPath();
                context.moveTo( 380, 320 );
                context.lineTo( 460, 320 );
                context.lineTo( 460, 100 );
                context.lineTo( 380, 100 );
                context.closePath();
            context.fill();
            context.stroke();

            context.strokeStyle = context.fillStyle = Colors.border2;
            context.fillRect( 380 - 4, 120, 90 - 3, 70 );
        return this;
    },
    showStatusPc( color ) {
        const context = this.context;
            context.strokeStyle = context.fillStyle = color;
            context.lineWidth = 8;
            context.lineCap = "round";
            context.beginPath();
                context.arc( 420, 280, 3, 0, Math.PI * 2 );
            context.fill();
            context.stroke();
        return this;
    },
    showStatusScreen( color ) {
        const context = this.context;
            context.strokeStyle = context.fillStyle = color;
            context.lineWidth = 8;
            context.lineCap = "round";
            context.beginPath();
                context.arc( 225, 265, 3, 0, Math.PI * 2 );
            context.fill();
            context.stroke();
        return this;
    },
    showStatus( color ) {
        this
            .showStatusPc( color )
            .showStatusScreen( color );
        return this;
    },
    addPowerButtonPc( color ) {
        const 
            context = this.context,
            k = Math.PI / 180;
            context.strokeStyle = context.fillStyle = color;
            context.lineWidth = 3;
            context.lineCap = "round";
            context.beginPath();
                context.arc( 420, 155, 8, k * -50, k * 230 );
                context.moveTo( 420, 143 );
                context.lineTo( 420, 155 );
            context.stroke();
        return this;
    },
    addPowerButtonScreen( color ) {
        const 
            context = this.context,
            k = Math.PI / 180;
            context.strokeStyle = context.fillStyle = color;
            context.lineWidth = 2;
            context.lineCap = "round";
            context.beginPath();
                context.arc( 320, 265, 6, k * -50, k * 230 );
                context.moveTo( 320, 257 );
                context.lineTo( 320, 265 );
            context.stroke();
        return this;
    },
    init( getPuzz ) {
        let screen = false, pc = false, state = 'initial' //pending on;
        const 
            context = this.context,
            obj = this;
                obj.drawScreen();
                obj.drawUPC();
                obj.showStatus( Colors.black );
                obj.addPowerButtonPc( Colors.red );
                obj.addPowerButtonScreen( Colors.red );
            
            const finalScreen = function () {
                obj.showScreen( Colors.blue );
                    obj.status = 'on';
                    obj.state = 'initial';
                    context.font = "1.3em serif";
                    context.fillStyle = Colors.white;
                return context.fillText( "Bienvenue !! ", 180, 190 );
            };
            
            const startPc = function () {
                if ( !screen ) {
                    obj.showScreen( Colors.black );
                } else if ( state == 'on' && screen && pc ) {
                    finalScreen();
                }

                if ( state === 'initial' && pc ) {
                    obj.showScreen( Colors.full );
                    obj.showStatus( Colors.blue );
                    obj.addPowerButtonPc( Colors.blue );
                        context.fillStyle = Colors.white;
                        context.font = "1.3em serif";
                        state = 'pending';
                        let counter = 0;
                        Digital.animate( function () {
                            if ( screen ) {
                                counter++;
                                obj.showStatusScreen( Colors.blue );
                                obj.showScreen( Colors.full );
                                context.fillStyle = Colors.white;
                                const 
                                    e = counter % 10;
                                    state = 'pending';
                                return context.fillText( e > 5 ? "MCApp." : "MCApp...", 180, 190 );
                            } else {
                                obj.showScreen( Colors.black );
                            }
                        }, {
                            from: [ 0 ],
                            to: [ 100 ],
                        }, {
                            duration: 3000,
                            then: function () {
                                state = 'on';
                                if ( screen ) {
                                    obj.showStatus( Colors.green );
                                    obj.addPowerButtonPc( Colors.green );
                                    finalScreen(); 
                                } else {
                                    obj.showScreen( Colors.black );
                                }
                            }
                        } );
                } 
            };

                    getPuzz( 310, 250, 30, 30 ).on( 'click', function () {
                        screen = !screen;
                        if ( screen ) {
                            obj.addPowerButtonScreen( Colors.green );
                            obj.showStatusScreen( Colors.green );
                        } else {
                            obj.addPowerButtonScreen( Colors.red );
                            obj.showStatusScreen( Colors.black );
                        }

                        startPc();
                    } );

                    getPuzz( 410, 145, 20, 20 ).on( 'click', function () {
                        if ( state === 'pending' )
                            return;
                        pc = !pc;
                        if ( !pc ) {
                            state = 'initial';
                            obj.addPowerButtonPc( Colors.red );
                            obj.showStatusPc( Colors.black );
                            obj.showScreen( Colors.black );
                        } else {
                            obj.addPowerButtonPc( Colors.blue );
                            obj.showStatusPc( Colors.blue );
                            startPc();
                        }
                    } );
        return this;
    }
};

Digital( function ( $ ) {
    const
        canvas = $( "#myCanvas" ),
        board = new Board( canvas ),
        context = board.context,
        getPuzz = function ( x, y, width, height ) {
            return new DrawSpace( board, Coord(
                x, y,
                width, height
            ) );
        };
    Drawer.context = context;
    Drawer.init( getPuzz );
} );