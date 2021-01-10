import React from 'react';
import classes from './CallUs.module.scss';
import WhatsappLink from '../WhatsappLink/WhatsappLink';
function CallUs({ title }) {
	return (
		<div className={classes.cont}>
			<p className={classes.text}>
				شما می توانید روی خدمات ویونا اپ حساب کنید، ما می توانیم با توجه به بودجه و اهداف بیزینس شما، نزدیک ترین
				مسیر را برای کسب و کار هوشمند شما تدوین نماییم.
			</p>

			<div className="d-flex justify-content-center">
				<WhatsappLink>
					<button className={classes.btn}>{title}</button>
				</WhatsappLink>
			</div>
		</div>
	);
}

export default CallUs;
