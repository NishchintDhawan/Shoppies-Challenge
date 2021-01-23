import './navbar.css'
import {Link} from 'react-router-dom';

const navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/home">
            <div className='logo'>
                <h2>Shoppies Movie Nominations</h2>
            </div>
            </Link>
        </nav>
    )
}

export default navbar;