
import { Link } from 'react-router-dom';
import argentBankLogo from '../assets/img/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = !!user.token;

  const handleSignOut = () => {
    dispatch(logoutUser());
    navigate('/signIn'); // Redirige vers la page SignIn après déconnexion
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={argentBankLogo} alt="logo Argent Bank" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <Link to="/userAccount" className="main-nav-item">
                <FontAwesomeIcon icon={faCircleUser} />
                {user.firstName}
              </Link>
              <span onClick={handleSignOut} className="main-nav-item" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sign Out
              </span>
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
