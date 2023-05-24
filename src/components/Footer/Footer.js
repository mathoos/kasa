import logo from '../../assets/logo-footer.svg'
import '../Footer/Footer.scss'

function Footer() {

	return(
        <footer className="footer">
            <img src={logo} className="footer_logo" alt='Kasa'/>
            <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer