import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { houseList } from '../data/Data'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import Collapse from '../components/Collapse'
import Tag from '../components/Tag'
import Footer from '../components/Footer'
import Error from '../pages/Error'
import '../style/index.scss'
import '../style/Fiche.scss'
import '../style/Collapse.scss'

function Fiche() {

	const [isOpen, setIsOpen] = useState([]);

	const toggle = (index) => {
		const newIsOpen = [...isOpen];
		newIsOpen[index] = !newIsOpen[index];
		setIsOpen(newIsOpen);
	};

	const starArray = [...Array(5).keys()].map(i => i + 1);

	// On créé un tableau de 4 éléments tous initialisé à false (chaque composant Collapse est fermé)
	useEffect(() => {
		setIsOpen(new Array(2).fill(true)); 
	}, []);

	const { id } = useParams();
	const [logement, setLogement] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const logementFound = houseList.find(logement => logement.id === id);
		if (logementFound) {
			setLogement(logementFound);
		} 
	},[id, navigate]);

	if(!logement){      
		return<Error/>
	}

	else{
		return (     
			<div className='container'>
				<Nav/>
				<div className="logement">
					<Slider slides={logement.pictures}/>
					<div className="logement_bloc">          
						<div className="logement_bloc-title">
							<h1 className="logement_bloc-title--principal">{logement.title}</h1>
							<p>{logement.location}</p>
						</div>
						<div className="logement_bloc-host">
							<p className="logement_bloc-host--name">{logement.host.name}</p>
							<img src={logement.host.picture} alt={logement.host.name} className="logement_bloc-host--img"/>
						</div>
					</div>
					<div className="logement_bloc">
						<div className="logement_bloc-tag">
							{logement.tags.map((item, i) => (
                  		<Tag key={i} name={item}/>
                		))}
						</div>
						<div className="logement_bloc-rating">
							{starArray.map(( i) => (
								<svg key={i} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill={i <= logement.rating - 1 ? "#FF6060" : "#E3E3E3"}/>
								</svg>	
							))}
						</div>
					</div>
					<div className="logement_bloc">
					<Collapse title="Description" index={0} isOpen={isOpen[0]} toggle={toggle}>
						<p className="collapse_container-content">{logement.description}</p>
					</Collapse>
					<Collapse title="Équipements" index={1} isOpen={isOpen[1]} toggle={toggle}>
						<div className="collapse_container-content">
							{logement.equipments.map((equipment, index) => (
        						<p key={index}>{equipment}</p>
      					))}
						</div>
					</Collapse>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Fiche