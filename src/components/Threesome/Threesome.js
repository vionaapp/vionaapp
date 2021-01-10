import React from 'react';
import classes from './Threesome.module.scss';

// Images
import money from '../../img/money.png';
import website from '../../img/website.png';
import design from '../../img/design.png';
import logodesign from '../../img/logodesign.png';
import posterdesign from '../../img/posterdesign.png';
import webdesign from '../../img/webdesign.png';
import frontend from '../../img/frontend.png';
import backend from '../../img/backend.png';
import graphicdesigner from '../../img/graphicdesigner.png';
import realestate from '../../img/realestate.png';
import business from '../../img/business.png';
import person from '../../img/person.png';
import idea from '../../img/idea.png';
import resume from '../../img/resume.png';
import system from '../../img/system.png';

function Threesome({ list, titletwo }) {
	return (
		<div className="container mt-5 mb-2">
			<div className="row">
				{list.map((each) => {
					const handleImage = () => {
						switch (each.img) {
							case 'money':
								return money;
							case 'design':
								return design;
							case 'website':
								return website;
							case 'logodesign':
								return logodesign;
							case 'webdesign':
								return webdesign;
							case 'posterdesign':
								return posterdesign;
							case 'frontend':
								return frontend;
							case 'backend':
								return backend;
							case 'graphicdesigner':
								return graphicdesigner;
							case 'realestate':
								return realestate;
							case 'resume':
								return resume;
							case 'idea':
								return idea;
							case 'system':
								return system;
							case 'person':
								return person;
							case 'business':
								return business;
							default:
								return money;
						}
					};
					const image = handleImage();
					return (
						<div key={each.img} className="col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
							<div className={classes.each}>
								<div style={{ height: '60px' }} className="d-flex justify-content-center">
									<img style={{ width: '60px', height: '100%' }} src={image} alt={each.img} />
								</div>
								<h4 dir="rtl" className="text-center mt-4">
									{each.title}
								</h4>
								{titletwo ? (
									<p dir="rtl" style={{ color: 'grey' }} className="text-center">
										{each.titletwo}
									</p>
								) : null}
								<p dir="rtl" className="text-center">
									{each.desc}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Threesome;
