import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import Background from '../components/Background/Background';
import Details from '../components/Details/Details';
import CallUs from '../components/CallUs/CallUs';
import Threesome from '../components/Threesome/Threesome';
import Alert from '../components/Alert/Alert';
import InstaWp from '../components/InstaWp/InstaWp';

const list = [
	{
		img: 'money',
		title: 'هوشمندسازی کسب و کار',
		titletwo: 'Digital Solutions for Businesses',
		desc: 'توسعه و حل مشکلات بیزینس از طریق دنیای نرم افزار و دیجیتال'
	},
	{
		img: 'website',
		title: 'طراحی وبسایت و اپلیکیشن',
		titletwo: 'Website & Application Development',
		desc: 'توسعه نرم افزار و وبسایت کاملا رسپانسیو برای تمامی دیوایس ها'
	},
	{
		img: 'design',
		title: 'گرافیک دیزاین',
		titletwo: 'Logo & Illustration Design',
		desc: 'طراحی و دیزاین لوگو برای برند و بیزینس شما'
	}
];

export const query = graphql`
	{
		background: file(relativePath: { eq: "img/background.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		ray: file(relativePath: { eq: "img/ray.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		kar: file(relativePath: { eq: "img/kar.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		chap: file(relativePath: { eq: "img/chap.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default function Home({ data }) {
	return (
		<Layout title="صفحه اصلی">
			<Alert />
			<Background img={data.background.childImageSharp.fluid} />
			<Threesome titletwo={true} list={list} />
			<InstaWp />
			<Details
				chap={data.chap.childImageSharp.fluid}
				ray={data.ray.childImageSharp.fluid}
				kar={data.kar.childImageSharp.fluid}
			/>
			<CallUs title="سفارش وبسایت" />
		</Layout>
	);
}
