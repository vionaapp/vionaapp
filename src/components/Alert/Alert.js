import React, { useState, Fragment } from 'react';
import classes from './Alert.module.scss';
import firework from '../../img/firework.png';
import WhatsappLink from '../WhatsappLink/WhatsappLink';

function AlertComp() {
	const [ show, setShow ] = useState(true);

	return (
		<Fragment>
			{show && (
				<WhatsappLink>
					<div className={classes.alert}>
						<div className="d-flex align-items-center">
							<p className={classes.text}>
								هدیه ویژه سه ماه هاستینگ رایگان از طرف گروه نرم افزار ویونا اپ برای اولین سفارش مشتریان
								عزیز
								<img className={classes.firework} alt="gift" src={firework} />
							</p>
						</div>

						<button onClick={() => setShow(false)} className={classes.btn}>
							x
						</button>
					</div>
				</WhatsappLink>
			)}
		</Fragment>
	);
}

export default AlertComp;
