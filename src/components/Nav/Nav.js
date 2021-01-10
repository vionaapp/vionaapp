import React, { Fragment } from 'react';
import classes from './Nav.module.scss';

// Components
import Links from '../Links/Links';
import Logo from '../Logo/Logo';
import TopNav from '../TopNav/TopNav';
import Burger from '../Burger/Burger';

function Nav() {
	return (
		<Fragment>
			<TopNav />
			<div className={`${classes.nav} sticky-top`}>
				<Links />
				<Burger />
				<Logo />
			</div>
		</Fragment>
	);
}

export default Nav;
