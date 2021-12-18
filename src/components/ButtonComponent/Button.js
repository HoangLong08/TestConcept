import React from 'react'

import "./Button.css";

function Button({ color, background, content }) {
	return (
		<button style={{ color: color, backgroundColor: background }} className="btn">
			{content}
		</button>
	)
}

export default Button
