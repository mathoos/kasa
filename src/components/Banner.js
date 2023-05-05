import '../style/Banner.css'
import bannerHome from '../assets/bannerHome.jpg'


function Banner() {
    return(
        <div className="banner">
            <figure className="banner_img">
                <img src={bannerHome} alt="Bannière de Kasa"/>
            </figure>
            
            <h1>Chez vous, partout, et ailleurs</h1>
        </div>
    )
}

export default Banner