import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/fiche">Fiche</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Header