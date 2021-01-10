import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/Layout/Layout';
import CallUs from '../components/CallUs/CallUs';
import Alert from '../components/Alert/Alert';
import First from '../components/First/First';
import Webtypes from '../components/Webtypes/Webtypes';
import InstaWp from '../components/InstaWp/InstaWp';

export const query = graphql`
	{
		file(relativePath: { eq: "img/webdevelopment.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

function DevelopPage({ data }) {
	return (
		<Layout title="توسعه وبسایت">
			<Alert />
			<InstaWp />
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<Img fluid={data.file.childImageSharp.fluid} alt="webdevelopment" />
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
						<First />
					</div>
				</div>
				<Webtypes />
			</div>
			<CallUs title="سفارش وبسایت" />
		</Layout>
	);
}

export default DevelopPage;
