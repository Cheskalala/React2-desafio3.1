import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar flex gap-4 items-center justify-end">
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? 'active font-bold uppercase' : 'font-bold uppercase'
				}
			>
				Home
			</NavLink>
			<NavLink
				to="/buscador"
				className={({ isActive }) =>
					isActive ? 'active font-bold uppercase' : 'font-bold uppercase'
				}
			>
				Pokemons
			</NavLink>
		</nav>
	);
};
export default Navbar;