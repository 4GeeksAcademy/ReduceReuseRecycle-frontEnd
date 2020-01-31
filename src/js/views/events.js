import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "../../styles/events_eventsForm.scss";

import { Context } from "../store/appContext";

export const Events = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="eventButton">
				<Link to="addEvent">
					<button className="btn2">Add Event</button>
				</Link>
			</div>
			<div className="cardEvent m-3 mx-auto row">
				{store.events.map((item, index) => {
					return (
						<div className="col-sm m-5 mx-auto" key={index}>
							<Card key={index} style={{ width: "20rem" }}>
								<Card.Img variant="top" style={{ height: "200px" }} src={item.eventImage} />
								<Card.Body>
									<Card.Title>{item.eventName}</Card.Title>
									<Card.Text>
										<p>
											{item.eventDate}
											{item.eventLocation}
										</p>
										<p>
											<small>{item.eventdescription}</small>
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</>
	);
};

{
	/* <Card style={{ width: "18rem" }}>
	<Card.Img variant="top" src="holder.js/100px180" />
	<Card.Body>
		<Card.Title>{item.eventName}</Card.Title>
		<Card.Text>
			<p>
				{item.eventDate} - {item.eventLocation}
			</p>
			<p>{item.eventdescription}</p>
		</Card.Text>
		<Button variant="primary">Go somewhere</button>
	</Card.Body>
</Card>; */
}
