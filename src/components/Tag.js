import '../style/Tag.scss'

function Tag(props) {
  return (
    <div className="tag">
        <p>{props.name}</p>
    </div>
  )
}

export default Tag