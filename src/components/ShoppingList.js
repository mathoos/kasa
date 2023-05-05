import { houseList } from '../data/Data'
import HouseItem from './houseItem'
import '../style/ShoppingList.css'
import { Link } from 'react-router-dom'

function ShoppingList(){
   return(
    <div className="shoppingList">       
        {houseList.map(({ id, title, cover }) =>           
            <Link to={`/fiche/${id}`} key={id}>
                <HouseItem
                    title={title}
                    cover={cover}
                />                    
            </Link>   
        )}      
    </div>
   )
}

export default ShoppingList