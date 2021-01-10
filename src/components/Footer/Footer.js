import React from 'react';
import { Link } from 'gatsby';
import classes from './Footer.module.scss';

// Images
import logo from '../../img/vionablack.png';
import whatsapp from '../../img/footerwp.png';
import instagram from '../../img/insta.png';
import email from '../../img/email.png';
import WhatsappLink from '../WhatsappLink/WhatsappLink';

function Footer() {
	return (
		<div className={classes.footer}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
						<p className="text-right" style={{ fontWeight: 'bold' }}>
							منو
						</p>
						<div className="d-flex flex-column justify-content-end">
							<Link className={`${classes.text} mb-2`} to="/">
								صفحه اصلی
							</Link>
							<Link className={`${classes.text} mb-2`} to="/develop">
								طراحی سایت و اپلیکیشن
							</Link>
							<Link className={`${classes.text} mb-2`} to="/graphic-design">
								گرافیک دیزاین
							</Link>
							<Link className={`${classes.text} mb-2`} to="/services">
								خدمات
							</Link>
							<Link className={`${classes.text} mb-2`} to="/about">
								درباره
							</Link>
						</div>
						<p className="text-right mt-2" style={{ fontWeight: 'bold' }}>
							تماس با ما
						</p>
						<p className={classes.text}>آدرس : کرج سه راه گوهردشت نبش چهارراه ولیعصر طبقه اول واحد ٣</p>
						<p className={classes.text}>شماره واتساپ : {process.env.NUMBER}</p>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
						<div style={{ height: '120px' }} className="d-flex justify-content-end pb-3">
							<img src={logo} className={classes.footerlogo} alt="footer-logo" />
						</div>
						<p className={classes.text}>تمامی حقوق مادی برای شرکت گروه نرم افزاری ویونا اپ محفوظ است.</p>
						<div className="d-flex justify-content-end">
							<a href="https://www.instagram.com/vionaapp.ir" target="_blank" rel="noreferrer">
								<img className={classes.img} src={instagram} alt="instagram" />
							</a>
							<a href="mailto:vionaapp@gmail.com" target="_blank" rel="noreferrer">
								<img className={classes.img} src={email} alt="email" />
							</a>
							<WhatsappLink>
								<img className={classes.img} src={whatsapp} alt="whatsapp" />
							</WhatsappLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
