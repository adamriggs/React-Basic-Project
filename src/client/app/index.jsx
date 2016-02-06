require('../sass/style.scss');
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {

	}

	componentDidMount() {

	}

	render() {
		return(
			<div>
				Basic Project
			</div>
		);
	}

}

render(<App/>, document.getElementById('app'));