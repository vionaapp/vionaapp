import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import InstaWp from '../components/InstaWp/InstaWp';

function ErrorPage() {
	return (
		<Layout title="صفحه یافت نشد">
			<InstaWp />
			<h5 className="mt-5 text-center">صفحه مورد نظر یافت نشد</h5>
			<div className="d-flex justify-content-center pb-5">
				<Link to="/">صفحه اصلی</Link>
			</div>
		</Layout>
	);
}

export default ErrorPage;
