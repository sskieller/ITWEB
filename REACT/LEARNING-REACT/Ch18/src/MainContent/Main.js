import React from 'react';
import {
	Route,
	NavLink,
	HashRouter
} from 'react-router-dom';
import './Main.css';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';



class Main extends React.Component {
	render() {
		return (
			// Provides foundation for navigation and browser history handling
			<HashRouter>
				<div>
					<h1>Simple SPA</h1>
					<ul className="header">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink to="/stuff">Stuff</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
					</ul>
					<div className="content">
					{/* Routes for the router navigation for the SPA */}
					<Route exact path="/" component={Home}/>				
					<Route path="/stuff" component={Stuff}/>
					<Route path="/contact" component={Contact}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;