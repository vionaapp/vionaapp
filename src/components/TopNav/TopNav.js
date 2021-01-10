import React from 'react';
import classes from './TopNav.module.scss';

import WhatsappLink from '../WhatsappLink/WhatsappLink';

import wp from '../../img/wp.png';
function TopNav() {
	return (
		<div className={classes.container}>
			<p className={classes.text}>
				به علت شیوع ویروس کرونا تمامی سفارشات مشتریان عزیز از طریق واتساپ انجام میشود
			</p>
			<div>
				<WhatsappLink>
					<img alt="whatsapp" src={wp} className={classes.whatsapp} />
					<p className={classes.number}>{process.env.NUMBER}</p>
				</WhatsappLink>
			</div>
		</div>
	);
}

export default TopNav;
