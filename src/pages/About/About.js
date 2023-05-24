import { useState , useEffect} from 'react'
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Collapse from '../../components/Collapse/Collapse'
import '../../style/index.scss'
import '../About/About.scss'
import bannerAbout from '../../assets/bannerAbout.jpg'

function About() {
  const [isOpen, setIsOpen] = useState([]);

  const toggle = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  // On créé un tableau de 4 éléments tous initialisé à false (chaque composant Collapse est fermé)
  useEffect(() => {
    setIsOpen(new Array(4).fill(false)); 
  }, []);

  return (
    <div className="container">
      <Nav/>
      <Banner imageSrc={bannerAbout}/>
      <div className="container_collapse">
        <Collapse title="Fiabilité" index={0} isOpen={isOpen[0]} toggle={toggle}>
          <p className="collapse_container-content">Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect" index={1} isOpen={isOpen[1]} toggle={toggle}>
          <p className="collapse_container-content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire 
          ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service" index={2} isOpen={isOpen[2]} toggle={toggle}>
          <p className="collapse_container-content">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </Collapse>
        <Collapse title="Sécurité" index={3} isOpen={isOpen[3]} toggle={toggle}>
          <p className="collapse_container-content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement 
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à 
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
      </div> 
      <Footer/>
    </div>
  );
}

export default About