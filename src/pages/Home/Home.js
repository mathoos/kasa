import Nav from '../../components/Nav'
import Banner from '../../components/Banner'
import HouseItem from '../../components/houseItem'
import Footer from '../../components/Footer'
import { houseList } from '../../data/Data'
import '../../style/index.scss'
import bannerHome from '../../assets/bannerHome.jpg'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="container">
      <Nav/>
      <Banner title="Chez vous, partout, et ailleurs" imageSrc={bannerHome}/>
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
      <Footer/>
    </div>
  );
}

export default Home;
