import '../style/Banner.scss'


function Banner(props) {
    const { title, imageSrc } = props;

    return(
        <div className="banner">
            <figure className="banner_img">
                <img src={imageSrc} alt="Bannière de Kasa"/>
            </figure>

            <div className="banner_title">
                <h1>{title}</h1>
            </div>  
        </div>
    )
}

export default Banner