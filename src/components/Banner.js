import '../style/Banner.scss'


function Banner(props) {
    const { title, imageSrc } = props;

    return(
        <div className="banner">
            <figure className="banner_img">
                <img src={imageSrc} alt="Bannière de Kasa"/>
            </figure>
            
            <h1 className="banner_title">{title}</h1>
        </div>
    )
}

export default Banner