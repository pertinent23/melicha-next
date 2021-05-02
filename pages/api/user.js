export default function handler ( req, res ) {
    if( req.method === 'POST' ) {
        //for manage post request
        res.status( 200 ).json(
            {
                data: "post"
            }
        );
    } else {
        res.status( 200 ).json(
            {
                data: "get"
            }
        );
    }
};