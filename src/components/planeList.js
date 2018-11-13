import React, { Component } from 'react';

class PlaneList extends Component {
	renderPlanelist() {
		let aircraftObj = [];

		this.props.planes.map(el => {
			const aircraft = el.aircraft;
			try {
				if (aircraftObj[aircraft.id]) {
					aircraftObj[aircraft.id].count++;
				} else {
					aircraftObj[aircraft.id] = {
						id: aircraft.id,
						model: aircraft.model,
						manufacturer: aircraft.manufacturer,
						duration: el.duration,
						count: 1
					};
				}
			} catch (err) {
				console.log(err);
			}
		});

		return aircraftObj.map(plane => {
			console.log(this.props)
			return (
				<li key={plane.id} className='collection-list'>
					Model: {plane.model} | Manufacturer: {plane.manufacturer} | Number of use:{' '}
					{plane.count} | Duration: {plane.duration}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul className='collection'>{this.renderPlanelist()}</ul>
			</div>
		);
	}
}

export default PlaneList;