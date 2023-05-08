import '../style/Logement.css'


function Logement() {
    return (     
       <div className="logement">
            <div className="logement_bloc">
                <div className="logement_bloc-title">
                    <h1 className="logement_bloc-title--principal">Titre</h1>
                    <p>Description</p>
                </div>
                <div className="logement_bloc-host">
                    <p className="logement_bloc-host--name">Host</p>
                    <img src="" className="logement_bloc-host--img"/>
                </div>
            </div>
            <div className="logement_bloc">
                <div className="logement_bloc-tag">
                    <p>Tag</p>
                </div>
                <div className="logement_bloc-rating">
                    <p>Stars</p>
                </div>
            </div>
       </div>
    )
}
  
export default Logement