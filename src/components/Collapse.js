
function Collapse({ title, children, index, isOpen = false, toggle }) {
    if (!title || !children || !toggle) return null; // Vérifie si les propriétés sont définies

    return (
      <div>
        <div onClick={() => toggle(index)}>{title}</div>
        {isOpen && <div>{children}</div>}
      </div>
    );
}

export default Collapse;