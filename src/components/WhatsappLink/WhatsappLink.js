import React from 'react';
import classes from './WhatsappLink.module.scss';

function WhatsappLink({ cls, children }) {
	return (
		<a
			className={`${classes.wp} ${cls}`}
			target="_blank"
			href="https://wa.me/989371101609"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}

export default WhatsappLink;
