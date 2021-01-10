import React, { Fragment } from 'react';
import classes from './Graphic.module.scss';

// Components
import CallUs from '../CallUs/CallUs';
import Images from '../Images/Images';
import Threesome from '../Threesome/Threesome';
import Alert from '../Alert/Alert';

const designlist = [
	{
		img: 'logodesign',
		title: 'طراحی لوگو',
		desc:
			'یکی از عناصری که در شکل گیری یک هویت در کسب تاثیر فراوانی دارد، لوگو ( آرم یا نشانه )می باشد . استودیو ترسیم ایده لوگویی برابر با نیاز و بودجه شما با پلنهای مختلف ارائه می نماید. طراحی لوگو در راستای سناریوی کسب و کار شما طراحی و اجرا می گردد.این اولین گام برای ایجاد هویت بصری یک فعالیت ، شرکت و کسب و کار می باشد.'
	},
	{
		img: 'webdesign',
		title: 'طراحی وب سایت',
		desc:
			'با رشد روز افزون استفاده از اینترنت به عنوان درگاه جستجوی کالا و خدمات و همچنین معرفی خدمات و فعالیت های گوناگون، داشتن یک وب سایت حرفه ای و مقرون به صرفه یکی از رکن های مهم در تبلیغات به شمار می آید .استودیو ترسیم ایده نیز می تواند در راستای کسب و کار شما وب سایتی با رعایت و پیروی از نوع فعالیت شما با استفاده از آخرین تکنولوژی های روز دنیا و همچنین با ارائه پلنهای مختلف در قیمتهای گوناگون برنامه نویسی و طراحی نماید.'
	},
	{
		img: 'posterdesign',
		title: 'طراحی پوستر',
		desc:
			'طراحی پوستر ها را می توان یک نوع تابلوی اعلانات موثری برای دیدن شدن تبلیغات ، آگهی نامه ، ترغیب ، شناساندن ، اعلام حضور ، تخفیفات ، معرفی کمپین ها و … دانست . شناخت پوسترهای تبلیغاتی تاثیر به سزایی در دیدن خدمات و محصولات یک مجموعه ، شرکت و یا یک برند را دارند و همچنین می توان از کاربردهای پوستر به : جلب‌نظر رهگذران ، تفهيم واقعيت يا انديشه‌اى به آنها ، ترغيب آنها براى پشتيبانى از يک انديشه ، معرفى يا آغاز يک فعاليت ، تبلیغات یک محصول ، معرفی فعالیت و خدمات واطلاع رسانی اشاره کرد.'
	}
];

function Graphic({ rayi, boka, architect, hani, denj, kado }) {
	return (
		<Fragment>
			<div className={classes.back}>
				<div className={classes.text_cont}>
					<h3 className={classes.text}>خدمات طراحی گرافیک</h3>
					<p className={classes.text}>مشاوره ، ایده پردازی و نظارت</p>
				</div>
			</div>
			<Alert />
			<Threesome titletwo={false} list={designlist} />
			<Images rayi={rayi} architect={architect} hani={hani} kado={kado} denj={denj} boka={boka} />
			<CallUs title="سفارش لوگو" />
		</Fragment>
	);
}

export default Graphic;
