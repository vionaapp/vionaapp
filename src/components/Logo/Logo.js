import React from 'react';
import { Link } from 'gatsby';

import logo from '../../img/viona.png';
function Logo() {
	return (
		<Link to="/">
			<img style={{ width: 90 }} className="img-fluid" src={logo} alt="logo" />
		</Link>
	);
}

export default Logo;
