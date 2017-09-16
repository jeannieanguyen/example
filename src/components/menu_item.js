import React, { Component } from 'react'; 

class MenuItem extends Component {
	render(){
		let {item} = this.props; 
		let { header, content } = item; 


		return (
			<div>
				<h2 onClick={this.props.onClick}>{ header }</h2>
				{this.props.is_shown && 
					<p>{ content }</p>
				}
			</div>
		);
	}
}

export default MenuItem; 
