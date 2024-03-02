import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Buscador from './views/Buscador.jsx';
import PokemonInfo from './views/PokemonInfo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const App =() => {

  return (
		<div className='text-white '>
			<div className=' bg-warning container-fluid'>

			<Navbar/>
			</div>
			<div className=''>
			<Routes>
				<Route
					path="/"
					element={<Home />}
					/>
				<Route
					path="/buscador"
					element={<Buscador />}
					/>
				<Route 
					path="/pokemon/:pokemonId" 
					element={<PokemonInfo />} 
					/>
			</Routes>
			</div>
		</div>
  )
}

export default App
