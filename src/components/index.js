import React, { Component } from 'react'; 
import Data from '../data/menu_data'; 
import MenuItem from './menu_item';
import _ from 'lodash';

class Menu extends Component {
	constructor(props){
		super(props); 
		this.state = {
			openHeader: null
		};
		this.toggleContent = this.toggleContent.bind(this); 
	}
	toggleContent(index){
		if(this.state.openHeader == index){
			this.setState({
				openHeader: null
			});
		} else {
			this.setState({
				openHeader: index
			});
		}
	}
	getMenuItems(){
		return _.map(Data, (item, index) => {
			return (
				<MenuItem 
					key={`menu_item_${index}`}
					item={item} 
					index={index}
					is_shown={this.state.openHeader == index}
					onClick={()=>{this.toggleContent(index)}}/>
			);
		});
	}
	render(){
		return (
			<div>
				{this.getMenuItems()}
			</div>
		);
	}
}

export default Menu; 

