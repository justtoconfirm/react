import React from 'react'
import Button from './../../1-atoms/button/Button'

const Modal = ({ handleClose, show, children }) => {

	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<Button onClick={handleClose}>Close</Button>
				{children}
			</section>
		</div>
	);
};

export default Modal