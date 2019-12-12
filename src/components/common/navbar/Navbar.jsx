import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

import './Navbar.css'

import Home from '../../pages/home/Home'
import About from '../../pages/about/About'

import labManuals from '../../../data/lab-manuals.json'
import books from '../../../data/books.json'

const HomePage = () => <Home books={books} labManuals={labManuals} />
const AboutPage = () => <About />

class Navbar extends Component {

	state = {}

	render() {
		return (
			<Router>
				<div>
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<div className="container">
							<a className="navbar-brand" href="localhost">
								<img src="./assets/images/logo.png" width="30" height="30" className="d-inline-block align-top" alt="Paras Prakashan Logo" />
								<span className="ml-3">Paras Prakashan</span>
							</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>

							<div className="collapse navbar-collapse" id="navbarToggler">
								<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
									<li className="nav-item">
										<NavLink exact className="nav-link" to="/" activeClassName="active"><i className="fa fa-book" /> Books</NavLink>
									</li>
									<li className="nav-item">
										<NavLink exact className="nav-link" to="/about" activeClassName="active"><i className="fa fa-building" /> About</NavLink>
									</li>
									<li className="nav-item">
										<a href="/#contact" className="nav-link"><i className="fa fa-phone" /> Contact</a>
									</li>
								</ul>
							</div>

						</div>
					</nav>

					<Route path="/" exact component={HomePage} />
					<Route path="/about/" component={AboutPage} />
				</div>
			</Router>
		)
	}
}

export default Navbar