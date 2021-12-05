import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Bloggy</h1>
            <div className="links">
                <Link to="/">Acceuil</Link>
                <Link to="/create">Nouveau blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;