import React from 'react';

import gatsby from '../../img/gatsby.png';
import next from '../../img/next.png';
import contentful from '../../img/contentful.png';
import react from '../../img/react.png';
import sass from '../../img/sass.png';
import mongo from '../../img/mongo.png';
import express from '../../img/express.png';
import node from '../../img/node.png';

const imgList = [ 'node', 'express', 'mongo', 'contentful', 'react', 'next', 'gatsby', 'sass' ];
function Tech() {
	return (
		<div className="container mt-4">
			<h5 className="text-right mr-3">تکنولوژی های مورد استفاده</h5>
			<div dir="rtl" className="row mt-5 pb-5">
				{imgList.map((each) => {
					const handle = () => {
						switch (each) {
							case 'node':
								return node;
							case 'express':
								return express;
							case 'mongo':
								return mongo;
							case 'react':
								return react;
							case 'contentful':
								return contentful;
							case 'next':
								return next;
							case 'gatsby':
								return gatsby;
							case 'sass':
								return sass;
							default:
								return sass;
						}
					};
					const imgSrc = handle();
					return (
						<div className="col-lg-2 col-md-4 col-sm-6 col-6">
							<div className="d-flex justify-content-center">
								<img
									className="mt-2"
									alt="tech"
									src={imgSrc}
									style={{ width: '46px', height: '46px' }}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Tech;
