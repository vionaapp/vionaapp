import React from 'react';
import Img from 'gatsby-image';
import classes from './Background.module.scss';
import WhatsappLink from '../WhatsappLink/WhatsappLink';

function Background({ img }) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
					<Img className="img-fluid" fluid={img} alt="background-image" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 col-12">
					<div className={classes.text_container}>
						<h2 className={classes.text}>گروه نرم افزاری ویونا اپ</h2>
						<p className={classes.desc}>طراحی و توسعه نرم افزار در حوزه وب و موبایل</p>
						<WhatsappLink>
							<button className={classes.btn}>سفارش وبسایت</button>
						</WhatsappLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Background;
