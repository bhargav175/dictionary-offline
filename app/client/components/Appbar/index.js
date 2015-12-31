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
				MontanaFlynn Dictionary Api {this.props.children}
		</div>;
	}
};

export default Appbar;