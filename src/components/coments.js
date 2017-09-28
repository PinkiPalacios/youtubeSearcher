import React, { Component } from 'react';

export  class Coments extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {

	  };
	  
	}


	render() {
		return (
			<div>
				<form>
					<input ref="input" type="text"/>
				</form>
					<button onClick={this.props.handleClick} >Comenta</button>
			</div>
		);
	}
}



