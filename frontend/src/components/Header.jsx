import { Link } from "react-router-dom"
import argentBankLogo from "../assets/img/argentBankLogo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img 
          className="main-nav-logo-image"
          src={argentBankLogo} 
          alt="logo Argent Bank" />
          <h1 className="sr-only">
            Argent Bank
          </h1>
        </Link>
        <div>
          <Link to="/SignIn" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  )
}