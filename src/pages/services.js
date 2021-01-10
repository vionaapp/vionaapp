import React from 'react';

// Components
import Layout from '../components/Layout/Layout';
import Threesome from '../components/Threesome/Threesome';
import CallUs from '../components/CallUs/CallUs';
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

function ServicesPage() {
	return (
		<Layout title="خدمات">
			<Alert />
			<InstaWp />
			<Threesome list={list} titletwo={false} />
			<CallUs title="سفارش وبسایت" />
		</Layout>
	);
}

export default ServicesPage;
