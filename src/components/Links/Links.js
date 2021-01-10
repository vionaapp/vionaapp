import React from 'react';
import { Link } from 'gatsby';
import classes from './Links.module.scss';
import CustomBtn from '../CustomBtn/CustomBtn';
import { navlinks } from '../../navlinks';
import WhatsappLink from '../WhatsappLink/WhatsappLink';

function Links() {
	return (
		<div className={classes.links}>
			<WhatsappLink>
				<CustomBtn cls="mt-1 mr-2">مشاوره و سفارش</CustomBtn>
			</WhatsappLink>

			{navlinks.map((each) => {
				return (
					<div key={each.name}>
						<Link className={classes.link} activeClassName={classes.linkactive} to={each.url}>
							{each.name}
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default Links;
