import Nav from '../components/Nav'
import Banner from '../components/Banner'
import ShoppingList from '../components/ShoppingList'
import Footer from '../components/Footer'
import '../style/index.scss'
import bannerHome from '../assets/bannerHome.jpg'

function Home() {
  return (
    <div className="container">
      <Nav/>
      <Banner title="Chez vous, partout, et ailleurs" imageSrc={bannerHome}/>
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default Home;
