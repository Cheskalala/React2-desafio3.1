import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar ">
			<div className='nav-item text-decoration-none '>
			<NavLink
				to="/"
				className= {({ isActive }) =>
				isActive ? 'active  uppercase ' : 'font-semibold uppercase'
			}
			>
				Home
			</NavLink>
				</div>
				<div className='nav-item'>
			<NavLink
				to="/buscador"
				className={({ isActive }) =>
				isActive ? 'active font-bold uppercase' : 'font-semibold uppercase'
			}
			>
				Pokemons
			</NavLink>
				</div>
		</nav>
	);
};
export default Navbar;