import './App.css'
import Dropdown from './components/Dropdown'
import RickAndMortyApp from './components/Rickandmorty'
import Navbar from './components/Rickandmorty/Navbar'
import Todoform from './components/Todoform'
import TravelBuddy from './components/TravelBuddy'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <TravelBuddy/> */}
        {/* <Todoform/> */}
        <Navbar/>
        <RickAndMortyApp />
        {/* <Dropdown/> */}
      </div>
      
    </>
  )
}

export default App
