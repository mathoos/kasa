import logo from '../assets/logo.svg'
import '../style/Nav.scss'
import { Link , useLocation} from 'react-router-dom'

function Nav() {

  const location = useLocation();

  return (
    <nav className="nav">  
      <Link to="/" className="nav_links-link">
        <img src={logo} className="nav_logo" alt='Kasa'/>
      </Link>          
        <div className="nav_links">
          <Link to="/" className={location.pathname === '/' ? 'nav_links-link active' : 'nav_links-link'}>Accueil</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'nav_links-link active' : 'nav_links-link'}>A propos</Link>
        </div>    
    </nav>
  )
}

export default Nav