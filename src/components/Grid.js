import './Grid.css'

//function for change state
function choose() {}

const Grid = ({ xo }) => {
  const button = <button onClick={choose()}></button>
  return (
    <div className="grid">
      <div className="item-1">{(xo[0], button)}</div>
      <div className="item-2">
        {xo[1]} {button}
      </div>
      <div className="item-3">
        {xo[2]} {button}
      </div>
      <div className="item-4">
        {xo[3]} {button}
      </div>
      <div className="item-5">
        {xo[4]} {button}
      </div>
      <div className="item-6">
        {xo[5]} {button}
      </div>
      <div className="item-7">
        {xo[6]} {button}
      </div>
      <div className="item-8">
        {xo[7]} {button}
      </div>
      <div className="item-9">
        {xo[8]} {button}
      </div>
    </div>
  )
}

export default Grid
