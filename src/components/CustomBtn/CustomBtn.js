import React from 'react';
import classes from './CustomBtn.module.scss';
function CustomBtn({ children, cls }) {
	return <button className={`${classes.btn} ${cls}`}>{children}</button>;
}

export default CustomBtn;
