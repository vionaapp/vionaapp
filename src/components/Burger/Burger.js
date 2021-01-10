import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby';
import { Squeeze as Hamburger } from 'hamburger-react';
import { Drawer } from 'antd';
import { navlinks } from '../../navlinks';

import CustomBtn from '../CustomBtn/CustomBtn';
import WhatsappLink from '../WhatsappLink/WhatsappLink';

import classes from './Burger.module.scss';
import logo from '../../img/viona.png';

function Burger() {
	const [ open, setOpen ] = useState(false);

	const onClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<div className={classes.container}>
				<Hamburger size={22} rounded toggled={open} toggle={setOpen} />
			</div>

			<Drawer placement={'left'} closable={true} onClose={onClose} visible={open} key={'left'}>
				<div className="m-4">
					<img src={logo} alt="nav-logo" className="img-fluid" />
				</div>
				<div className="d-flex flex-column-reverse align-items-end">
					{navlinks.map((each) => {
						return (
							<div key={each.name} className="mb-3 mt-3">
								<Link className={classes.link} activeClassName={classes.linkactive} to={each.url}>
									{each.name}
								</Link>
							</div>
						);
					})}
					<WhatsappLink>
						<CustomBtn cls="mt-2 mb-3">سفارش وبسایت</CustomBtn>
					</WhatsappLink>
				</div>
			</Drawer>
		</Fragment>
	);
}

export default Burger;
