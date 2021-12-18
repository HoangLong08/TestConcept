import { heartIcon } from 'assets/index';
import React from 'react'

import "./Cart.css";

function Cart({ image, name, price, numberHearth }) {
	return (
		<div className="cart-item">
			<div className="item-image">
				<img src={image} alt="hinh anh" />
			</div>
			<p className="item-name">
				{name}
			</p>
			<div className="item-des">
				<p className="item-price">
					{price} won
				</p>
				<div className="item-icon">
					<img src={heartIcon} alt="icon" />
					<span>
						{numberHearth}
					</span>
				</div>
			</div>
		</div >
	)
}

export default Cart
