import '../style/HouseItem.scss'

function HouseItem({ title, cover }) {
	return (
        <div className="houseItem_bloc">
            <img className='houseItem_bloc-img' src={cover} alt={title}/>
            <p className="houseItem_bloc-title">{title}</p>	
        </div>				
	)
}

export default HouseItem