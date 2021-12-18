import Login from 'pages/LoginPage/Login';
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home';
function SwitchRoute() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	)
}

export default SwitchRoute
