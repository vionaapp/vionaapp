import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import Threesome from '../components/Threesome/Threesome';
import Alert from '../components/Alert/Alert';
import Tech from '../components/Tech/Tech';
import InstaWp from '../components/InstaWp/InstaWp';

export const query = graphql`
	{
		one: file(relativePath: { eq: "img/devone.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		two: file(relativePath: { eq: "img/devtwo.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const team = [
	{ title: 'مازیار رادمنش', desc: 'متخصص فرانت اند و دیتابیس', img: 'frontend' },
	{ title: 'غزل اشکانی', desc: 'کارشناس گرافیک و دیزاین', img: 'graphicdesigner' },
	{ title: 'عماد کاظمی', desc: 'متخصص بک اند سئو و سرور', img: 'backend' }
];

function AboutPage({ data }) {
	return (
		<Layout title="درباره ما">
			<Alert />
			<InstaWp />
			<About one={data.one.childImageSharp.fluid} two={data.two.childImageSharp.fluid} />
			<div className="container">
				<h5 className="text-right mt-5 pb-3 mr-4">تیم ویونا اپ</h5>
			</div>
			<Threesome list={team} titletwo={false} />
			<Tech />
		</Layout>
	);
}

export default AboutPage;
