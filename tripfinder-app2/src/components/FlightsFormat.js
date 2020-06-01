import React from "react"
import OtherDates from "./TomorrowDate"


const flightsFormat = (props) => {
    let flights;

    
    
    if(props.info) {
        flights = props.info.map(function (flight, index) {
            return  (                 
            <tr>
                <td>{flight.source["Name"]} - {flight.source["IataCode"]}</td>
                <td>{flight.destination["Name"]} - {flight.destination["IataCode"]}</td>
                <td>{flight.departureDate}</td>
                <td>{flight.returnDate}</td>
                <td>{flight.outboundCarrier["Name"]}</td>
                <td>{flight.inboundCarrier["Name"]}</td>
                <td>{flight.price} {flight.currency["Code"]}</td>
            </tr>
            )
        });
    }
    else {
        flights =                  
            <tr>
                <td>{props.model.departurePlace["PlaceName"]} - {props.model.departurePlace["PlaceId"]}</td>
                <td>{props.model.arrivalPlace["PlaceName"]} - {props.model.arrivalPlace["IataCode"]}</td>
                <td>{props.model.departureDate}</td>
                <td>{props.model.returnDate}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        ;
    }    
        return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Depart</th>
                        <th>Return</th>
                        <th>Depart Airline</th>
                        <th>Return Airline</th>
                        <th>Price Per Person</th>
                    </tr>
                </thead>
                <tbody>
                    {flights}
                </tbody>
            </table>
        </div>
        )
}

export default flightsFormat;