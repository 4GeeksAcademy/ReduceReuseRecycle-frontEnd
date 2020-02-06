import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/events_eventsForm.scss";

import { Context } from "../store/appContext";

export const Events = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="eventsHeader text-center mt-5">
				<h2>EVENTS</h2>
			</div>
			<div className="eventButton">
				<Link to="/addEvent">
					<i className="fas fa-plus-circle fa-lg" />
				</Link>
			</div>
			<div className="row eventsCard1 container mx-auto">
				{store.events.map((item, index) => {
					return (
						// <div className="container " >
						<div className="col-4 card eventsCard" key={index}>
							<Link to={item.eventInfo}>
								<img src={item.eventImage} className="card-img-top imageSize" alt="..." />
							</Link>
							<div className="card-body card2">
								<h5 className="card-title">{item.eventName}</h5>
								<p className="card-text">
									{item.eventDate}-{item.eventLocation}
								</p>
								<p>
									<small>{item.eventdescription}</small>
								</p>
							</div>
						</div>
						// </div>
					);
				})}
			</div>
		</>
	);
};
