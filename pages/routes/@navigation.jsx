export default function Navigation ( { page } ) {
    return (
        <nav className="navbar navbar-expand-md flex-md-column container-fluid main-nav d-flex justify-content-between justify-content-md-start align-items-center pl-0" role="navigation">
            <div className="navbar-brand nav-head d-flex justify-content-center align-items-center mt-md-3 ml-3 ml-md-0">
                <img src="/img/icon.svg" alt="" className="img" height="50" width="50" />
                <span className="d-flex h-100"> Melicha-leaning </span>
            </div>
            <button className="navbar-toggler d-flex d-md-none flex-column justify-content-center p-0" type="button" data-toggle="collapse" data-target="#navbar-items-container" arial-control="navbarNav" arial-expanded="false" arial-label="toggle navigation">
                <span className="navbar-toggler-icon d-block position-relative"></span>
            </button>
            <div className="collapse navbar-collapse position-relative flex-column py-5 justify-content-start w-100" id="navbar-items-container">
                <ul className="navbar-nav p-0 m-0 py-5 container-fluid d-flex flex-column justify-content-start">
                    <li className="nav-item container-fluid mt-4 d-flex flex-column align-items-start justify-content-start justify-content-start justify-content-lg-center align-items-lg-center active">
                        <div className="nav-item-content position-relative d-flex justify-content-center align-items-center pr-5 pl-4">
                            <img src="/img/dashboard.svg" alt="dashboard" className="navbar-item-icon img" height="30" width="30" />
                            <div className="navbar-item-label text-center d-inline-block ml-3"> Dashboard </div>
                        </div>
                    </li>
                    <li className="nav-item container-fluid mt-4 d-flex flex-column align-items-start justify-content-start justify-content-start justify-content-lg-center align-items-lg-center">
                        <div className="nav-item-content position-relative d-flex justify-content-center align-items-center pr-5 pl-4">
                            <img src="/img/formations-w.svg" alt="dashboard" className="navbar-item-icon img" height="30" width="30" />
                            <div className="navbar-item-label text-center d-inline-block ml-3"> Formation </div>
                        </div>
                    </li>
                    <li className="nav-item container-fluid mt-4 d-flex flex-column align-items-start justify-content-start justify-content-start justify-content-lg-center align-items-lg-center">
                        <div className="nav-item-content position-relative d-flex justify-content-center align-items-center pr-5 pl-4">
                            <img src="/img/myClass-w.svg" alt="dashboard" className="navbar-item-icon img" height="30" width="30" />
                            <div className="navbar-item-label text-center d-inline-block ml-3"> Mes cours </div>
                        </div>
                    </li>
                    <li className="nav-item container-fluid mt-4 d-flex flex-column align-items-start justify-content-start justify-content-start justify-content-lg-center align-items-lg-center">
                        <div className="nav-item-content position-relative d-flex justify-content-center align-items-center pr-5 pl-4">
                            <img src="/img/person-w.svg" alt="dashboard" className="navbar-item-icon img" height="30" width="30" />
                            <div className="navbar-item-label text-center d-inline-block ml-3"> Mon compte </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};