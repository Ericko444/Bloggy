import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="page-not-found">
            <h2>Error 404 - Page Not Found</h2>
            <Link to="/">Back To Home Page</Link>
        </div>
     );
}
 
export default PageNotFound;