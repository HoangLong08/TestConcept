import React from 'react'
import { logo } from 'assets/index';
import { useNavigate, Link } from 'react-router-dom';

import "./Header.css";

function Header() {
	const navigate = useNavigate();

	const handleChangePage = () => {
		navigate("/");
	}

	return (
		<header>
			<div className="content-header container">
				<div className="header-left" onClick={handleChangePage}>
					<img src={logo} alt="logo" />
				</div>
				<div className="header-right">
					<ul className="header-menu">
						<li className="header-menu-item">
							<Link to="/introduction" className="header-menu-link">
								introduction
							</Link>
						</li>
						<li className="header-menu-item">
							<Link to="/solution" className="header-menu-link">
								solution
							</Link>
						</li>
						<li className="header-menu-item">
							<Link to="/rate-plan" className="header-menu-link">
								rate plan
							</Link>
						</li>
						<div className="line header-menu-item"></div>

						<li className="header-menu-item">
							<Link to="/login" className="header-menu-link">
								login
							</Link>
						</li>
						<li className="header-menu-item">
							<Link to="/apply-for-free-use" className="header-menu-link">
								apply for free use
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
