import React from 'react'
import '../styles/Button.css'

const Button = ({ text, action, styleName }) => {
	if (!styleName) {
		styleName = 'basic__btn'
	}

	return (
		<div className={styleName}>
			<button onClick={action}>{text}</button>
		</div>
	)
}

export default Button
