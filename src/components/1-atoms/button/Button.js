// @flow

import React from 'react'
import classNames from 'classnames'
import type { ButtonType } from './Button.types'

const Button = ({ type = 'button', url = '', className = '', theme = '', isFullWidth = false, children }: ButtonType) => {

	const buttonClass = classNames('btn', className, {
		'btn--primary': theme === 'primary',
		'btn--secondary': theme === 'secondary',
		'btn--full-width': isFullWidth
	})

	const isAnchorElement = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

	// Function: button click
	function handleClick(e) {
		e.preventDefault()
		console.log('Button was clicked')
	}

	const renderButton = () =>
		<button type={type} className={buttonClass} onClick={handleClick}>{children}</button>

	const renderAnchor = () =>
		<a href={url} className={buttonClass} onClick={handleClick}>{children}</a>

	return (
		isAnchorElement ? renderAnchor() : renderButton()
	)
}

export default Button