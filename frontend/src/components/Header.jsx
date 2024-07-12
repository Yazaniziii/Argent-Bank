import { Link } from 'react-router-dom';
import argentBankLogo from '../assets/img/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = !!user.token;

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/signIn');
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="logo Argent Bank"
          />
          <h1 className="sr-only">
            Argent Bank
          </h1>
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <span className="main-nav-item">{user.firstName}</span>
              <button onClick={handleLogout} className="main-nav-item">
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/signIn" className="main-nav-item">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
