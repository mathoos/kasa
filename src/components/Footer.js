import logo from '../assets/logo-footer.svg'
import '../style/Footer.css'

function Footer() {

	return(
        <footer>
            <img src={logo} className="footer_logo" alt='Kasa'/>
            <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer