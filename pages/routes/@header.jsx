export default function Header ( { title } ) {
    return (
        <div className="container-fluid row d-flex align-items-center p-0 mt-4">
            <div className="col col-lx-2 align-items-end d-none d-lg-flex h-100">
                <h3 className="text-left text-dark text-align-baseline"> { title } </h3>
            </div>
            <div className="col col-lx-6 p-0 px-3">
                <div className="container ml-lg-0 input-group search-space d-flex justify-content-center align-items-center px-1 pl-2">
                    <input type="text" name="search" id="search" className="form-control search-field" placeholder="Recherche:" />
                    <div className="input-group-append d-flex position-relative justify-content-center align-items-center h-100">
                        <img src="/img/search.svg" alt="search" className="img d-block position-relative" height="20" width="20" />
                    </div>
                </div>
            </div>
            <div className="col-2 col-md-4 col-lg-3 p-0 px-2 d-flex justify-content-center">
                <div className="d-flex position-relative justify-content-center align-items-center user-icon-container p-1">
                    <img src="/img/person.svg" alt="icon" className="img ml-md-2 user-icon" height="25" width="25" />
                    <div className="d-none flex-column d-md-flex justify-content-center align-items-center mx-4">
                        <span className="d-flex position-relative name"> Franck Duval </span>
                        <span className="d-flex position-relative pseudo"> @franck_duval </span>
                    </div>
                </div>
            </div>
        </div>
    );
};