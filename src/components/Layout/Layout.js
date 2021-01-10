import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// Components
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import './Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
function Layout({ children, title }) {
	return (
		<Fragment>
			<Helmet>
				<meta name="keywords" content="viona , viona app , webdesign , web , webdevelopment" />
				<meta name="description" content="Web development and software company" />
				<link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" type="text/css" />
				<title>ویونا اپ | {title}</title>
			</Helmet>

			<Nav />
			{children}
			<Footer />
		</Fragment>
	);
}

export default Layout;
