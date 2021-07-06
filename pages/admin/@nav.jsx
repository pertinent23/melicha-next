export default function Nav( { url, backFx } ) {
    return (
        <div className="nav container-fluid d-flex shadow align-items-center">
            <div className="nav-icon d-flex flex-column justify-content-center align-items-center" onClick={ backFx }>
                <div className="items item1"></div>
                <div className="items item2"></div>
            </div>
            <div className="nav-text d-block pl-4">
                { url }
            </div>
        </div>
    ); 
};