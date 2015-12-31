import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDefinition} from '../../actions/search';
import Appbar from '../../components/Appbar';
import AppBody from '../../components/Body';
import SearchButton from '../../components/Search';
import DictionaryCard from '../../components/DictionaryCard';

import {myEnvIsBrowserFn} from '../../../utils/helpers';

if(myEnvIsBrowserFn()){
	require('./style.scss');
}

class App extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const {dispatch} = this.props;
	}
	handleSubmit(val){
		const {dispatch} = this.props;
		if(typeof val !== 'undefined' && val.toString().length > 0){
			dispatch(fetchDefinition(val));		
		}
	}
	render(){
		let {searchReducer} = this.props;
		return <div className="root">
				<Appbar>
					<SearchButton handleSubmit={this.handleSubmit.bind(this)} />
				</Appbar>
				<AppBody>
					<DictionaryCard searchWord={searchReducer.searchWord} definition={searchReducer.definition} />
				</AppBody>
			</div>;
	}
};

function select(state){
	let {searchReducer} = state;
	return {
		searchReducer
	};
};

export default connect(select)(App);

