import '../Collapse/Collapse.scss'
import chevron from '../../assets/chevron-up-solid.svg'


function Collapse({ title, children, index, isOpen = false, toggle }) {
  const chevronClass = isOpen ? "collapse_container-top--icon expanded" : "collapse_container-top--icon";

  return (
    <div className="collapse">
      <div className="collapse_container-top" onClick={() => toggle(index)}>
        <p className="collapse_container-top--title">{title}</p>
          <img src={chevron} alt='chevron-icon' className={chevronClass}/>
      </div>
      {isOpen && <div className="collapse_container-bottom">{children}</div>}
    </div>
  );
}

export default Collapse;