import Link from 'next/link';

export const Pile = {
    BASE_URL: '/img/',
    IMG_EXTENSION: '.svg',
    list: [],
    data: [],
    empty: function ( ) {
        this.list = [ ];
        this.data = [ ];
    },
    add: function ( content, img, href, id ) {
        return this.data.push( {
            content: content,
            img: img,
            id: id,
            href: href
        } );
    },
    addAll: function ( list ) {
        this.empty();
        for( let item  in list )
            this.add(
                list[ item ].content,
                list[ item ].img,
                list[ item ].href,
                item
            );
    },
    run: function ( page ) {
        let 
            i = 0,
            data = {},
            final = "",
            img = "";
            this.list = [ ];
                for( ; i < this.data.length; i++ ) {
                    data = this.data[ i ];
                    final = data.id === page ? " active" : "";
                    img = data.img + ( final !== ' active' ? '-w' : "" );
                    
                    this.list.push( 
                        <li 
                            className={ "nav-item container-fluid mt-3 d-flex flex-column align-items-start justify-content-start justify-content-start justify-content-lg-center align-items-lg-center".concat( final ) } 
                            key={ data.id }
                        >
                            <Link href={ data.href }>
                                <div className="nav-item-content position-relative d-flex justify-content-center align-items-center pr-5 pl-4">
                                    <img src={ Pile.BASE_URL.concat( img ).concat( Pile.IMG_EXTENSION ) } alt="dashboard" className="navbar-item-icon img" height="30" width="30" />
                                    <div className="navbar-item-label text-center d-inline-block ml-3">
                                        { data.content }
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }
        return this.list;
    }
};

export default function Navigation ( { page } ) {
    return (
        <nav className="navbar navbar-expand-md flex-md-column container-fluid main-nav d-flex justify-content-between justify-content-md-start align-items-center pl-0" role="navigation">
            <div className="navbar-brand nav-head d-flex justify-content-center align-items-center mt-md-3 ml-3 ml-md-0">
                <img src="/img/sicon.png" alt="" className="img" height="60" width="70" />
                <span className="d-flex h-100"> MCApp </span>
            </div>
            <button className="navbar-toggler d-flex d-md-none flex-column justify-content-center p-0" type="button" data-toggle="collapse" data-target="#navbar-items-container" arial-control="navbarNav" arial-expanded="false" arial-label="toggle navigation">
                <span className="navbar-toggler-icon d-block position-relative"></span>
            </button>
            <div className="collapse navbar-collapse position-relative flex-column py-0 justify-content-start w-100" id="navbar-items-container">
                <ul className="navbar-nav p-0 m-0 py-5 container-fluid d-flex flex-column justify-content-start">
                    { Pile.run( page ) }
                </ul>
            </div>
        </nav>
    );
};

Pile.addAll( {
    home: {
        img: "dashboard",
        href: "/",
        content: "Tableau de control"
    },
    courses: {
        img: "myClass",
        href: "/routes/courses/prerequis",
        content: "Tous Mes cours"
    },
    simulation: {
        img: "simulation",
        href: "/routes/simulation/index",
        content: "Simulation"
    },
    exercise: {
        img: "exercise",
        href: "/routes/exercise/index",
        content: "Exercise"
    },
    game: {
        img: "game",
        href: "/routes/game/index",
        content: "Jeux"
    },
    lexique: {
        img: "formations",
        href: "/routes/lexique",
        content: "Lexique"
    },
    account: {
        img: "account",
        href: "/routes/account/@user",
        content: "Mon compte"
    },
} );