
import Nav from './Nav'
import Banner from './Banner'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../style/Home.css'

function Home() {
  return (
    <div className="home_container">
      <Nav/>
      <Banner/>
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default Home;
