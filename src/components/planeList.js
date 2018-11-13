import React, { Component } from 'react';

class PlaneList extends Component {
	renderPlanelist() {
		let aircraftObj = [];

		this.props.planes.map(el => {
			try {
				if (aircraftObj[el.aircraft.id]) {
					aircraftObj[el.aircraft.id].count++;
				} else {
					aircraftObj[el.aircraft.id] = {
						id: el.aircraft.id,
						model: el.aircraft.model,
						manufacturer: el.aircraft.manufacturer,
						count: 1,
					};
				}
			} catch (err) {
				console.log(err);
			}
		});

		return aircraftObj.map(plane => {
			return (
				<li key={plane.id} className='collection-list'>
					Model: {plane.model} | Manufacturer: {plane.manufacturer} | Number of use:{' '}
					{plane.count}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<h3>User Plane List</h3>
				<ul className='collection'>{this.renderPlanelist()}</ul>
			</div>
		);
	}
}

export default PlaneList;
