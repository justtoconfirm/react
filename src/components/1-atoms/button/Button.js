// @flow

import React from 'react'
import classNames from 'classnames'
import type { ButtonType } from './Button.types'

function Button({ type = 'button', url = '', className = '', theme = '', isFullWidth = false, children }: ButtonType) {

	const buttonClass = classNames('btn', className, {
		'btn--primary': theme === 'primary',
		'btn--secondary': theme === 'secondary',
		'btn--full-width': isFullWidth
	})

	const isAnchorElement = url && (url.includes('http') || url.startsWith('#'))

	const renderButton = () =>
		<button type={type} className={buttonClass}>{children}</button>

	const renderAnchor = () =>
		<a href={url} className={buttonClass}>{children}</a>

	return (
		isAnchorElement
			? renderAnchor()
			: renderButton()
	)
}

export default Button