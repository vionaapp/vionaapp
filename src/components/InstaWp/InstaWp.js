import React from 'react';
import classes from './InstaWp.module.scss';

// Images
import insta from '../../img/ins.png';
import wpback from '../../img/wpback.png';
import WhatsappLink from '../WhatsappLink/WhatsappLink';

function InstaWp() {
	return (
		<div className={classes.cont}>
			<div className={classes.insta}>
				<a
					style={{ display: 'flex', justifyContent: 'center' }}
					rel="noreferrer"
					target="_blank"
					href="https://www.instagram.com/vionaapp.ir"
				>
					<img style={{ width: '24px' }} src={insta} alt="insta" className="img-fluid" />
				</a>
			</div>
			<div className={classes.wp}>
				<WhatsappLink>
					<img style={{ width: '24px' }} src={wpback} alt="whatsapp" className="img-fluid" />
				</WhatsappLink>
			</div>
		</div>
	);
}

export default InstaWp;
