import React, { Fragment } from 'react';
import classes from './Images.module.scss';
import Img from 'gatsby-image';

const logoList = [ 'denj', 'hani', 'kado', 'architect', 'boka', 'rayi' ];

function Images({ boka, rayi, architect, denj, kado, hani }) {
	return (
		<Fragment>
			<h3 className="text-center">لوگو های نمونه</h3>
			<div className={classes.images}>
				{logoList.map((each) => {
					const handleImageSrc = () => {
						switch (each) {
							case 'boka':
								return boka;
							case 'rayi':
								return rayi;
							case 'denj':
								return denj;
							case 'kado':
								return kado;
							case 'hani':
								return hani;
							case 'architect':
								return architect;
							default:
								return architect;
						}
					};
					const imgSrc = handleImageSrc();
					return (
						<div key={each}>
							<Img className={classes.img} fluid={imgSrc} alt={each} />
						</div>
					);
				})}
			</div>
		</Fragment>
	);
}

export default Images;
