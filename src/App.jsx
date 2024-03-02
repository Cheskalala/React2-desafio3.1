import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Buscador from './views/Buscador.jsx';
import PokemonInfo from './views/PokemonInfo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const App =() => {

  return (
		<div>
			<Navbar />

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
  )
}

export default App
