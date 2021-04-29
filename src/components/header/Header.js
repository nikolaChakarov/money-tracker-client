import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {

    const { token } = useContext(GlobalContext);

    return (
        <nav>
            <h3>NC LoGo</h3>
            {token ? <LoggedInUser /> : <NotLoggedInUser />}
        </nav>
    )

}

const LoggedInUser = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/tracker">Money Tracker</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
    )
}

const NotLoggedInUser = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    )
}

export default Header;