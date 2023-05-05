import logo from '../assets/logo-footer.svg'
import '../style/Footer.css'

function Footer() {

	return(
        <footer>
            <img src={logo} className="logo" alt='Kasa'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer