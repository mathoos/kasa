import logo from '../assets/logo.svg'
import '../style/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>  
        <img src={logo} className="logo" alt='Kasa'/>     
        <div className="links">
            <Link to="/" className="links_link">Accueil</Link>
            <Link to="/about" className="links_link">A propos</Link>
        </div>    
    </nav>
  )
}

export default Nav