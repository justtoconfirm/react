// @flow

import type { childrenType } from '../../utils/types'

export type ButtonType = {
	type?: '' | 'button' | 'submit',
	url?: string,
	className?: string,
	theme?: string,
	isFullWidth?: boolean,
	children: childrenType
}