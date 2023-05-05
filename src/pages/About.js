import { useState , useEffect} from 'react'
import Collapse from '../components/Collapse'
import '../style/About.css'

function About() {
  const [isOpenArray, setIsOpenArray] = useState([]);

  const toggle = (index) => {
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = !newIsOpenArray[index];
    setIsOpenArray(newIsOpenArray);
  };

  useEffect(() => {
    setIsOpenArray(new Array(3).fill(false)); // 3 états initialement fermés
  }, []);

  return (
    <div>
      <Collapse title="Titre 1" index={0} isOpen={isOpenArray[0]} toggle={toggle}>
        Contenu 1
      </Collapse>
      <Collapse title="Titre 2" index={1} isOpen={isOpenArray[1]} toggle={toggle}>
        Contenu 2
      </Collapse>
      <Collapse title="Titre 3" index={2} isOpen={isOpenArray[2]} toggle={toggle}>
        Contenu 3
      </Collapse>
    </div>
  );
}

export default About