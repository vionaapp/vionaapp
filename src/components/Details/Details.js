import React from 'react';
import Img from 'gatsby-image';
import classes from './Details.module.scss';
function Details({ kar, ray, chap }) {
	return (
		<div className={classes.cont}>
			<div className={classes.details}>
				<div className="d-flex align-items-center justify-content-around pt-5 pb-3 pl-5 pr-5">
					<Img fluid={kar} className="img-fluid" style={{ width: '100px' }} alt="kar" />
					<Img fluid={chap} className="img-fluid" style={{ width: '100px' }} alt="chap" />
					<Img fluid={ray} className="img-fluid" style={{ width: '100px' }} alt="ray" />
				</div>
				<p dir="rtl" className="text-center m-0 p-0 mr-4 ml-4 mt-3 pb-4">
					ما بر روی راهکارهای هوشمندسازی کسب و کار و ورود کسب و کارهای سنتی به دنیای دیجیتال تمرکز کرده ایم و
					در تلاشیم تا با تغییراتی کوچک به واسطه فناوری اطلاعات، نتایجی بزرگ را رقم بزنیم. ما لحظه به لحظه در
					کنار مشتریانمان هستیم .
				</p>
			</div>
		</div>
	);
}

export default Details;
