import './App.css'
import Grid from './components/Grid'
import Scores from './components/Scores'

//ubah jadi state biar bisa diubah
let xo = ['x', 'o', 'x', '', '', '', '', '', '']

function choose() {
  this.style.display = 'none'
}

function Logic() {}

const App = () => {
  return (
    <div className="App">
      <Grid xo={(xo, choose)} />
      <Scores />
    </div>
  )
}

export default App
