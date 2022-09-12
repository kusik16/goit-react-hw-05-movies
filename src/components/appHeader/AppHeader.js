import { NavLink } from 'react-router-dom';

import appHeader from './AppHeader.module.css';

const AppHeader = () => {
	return (
		<header className={appHeader.header}>
			<nav>
				<ul className={appHeader.list}>
					<li className={appHeader.item}>
						<NavLink
							style={({ isActive }) => ({
								color: isActive ? 'red' : 'black',
							})}
							to="/goit-react-hw-05-movies/"
						>
							Home
						</NavLink>
					</li>
					<li className={appHeader.item}>
						<NavLink
							style={({ isActive }) => ({
								color: isActive ? 'red' : 'black',
							})}
							to="/goit-react-hw-05-movies/movies"
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
