import React from 'react';
import {myEnvIsBrowserFn} from '../../../utils/helpers';
var styles = {};

if(myEnvIsBrowserFn()){
	styles = require('./style.scss');	
}


class Appbar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={styles.root}>
				Appbar
		</div>;
	}
};

export default Appbar;