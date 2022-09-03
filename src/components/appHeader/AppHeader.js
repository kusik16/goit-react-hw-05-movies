import { NavLink } from 'react-router-dom';

import './appHeader.css'

const AppHeader = () => {
	return (
		<header className="app__header">
			<nav className="app__menu">
				<ul className="app__header_list">
					<li className="app__header_list-item">
						<NavLink
							style={({ isActive }) => ({
								color: isActive ? 'red' : 'black',
							})}
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li className="app__header_list-item">
						<NavLink
							style={({ isActive }) => ({
								color: isActive ? 'red' : 'black',
							})}
							to="/movies"
						>
							Movies
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
