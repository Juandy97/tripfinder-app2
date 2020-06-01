import React from 'react';
import { Link } from "react-router-dom";
import FlightsFormat from "./FlightsFormat"

 const Flights = (props) => {

    console.log(props)
    
    function getFlight(id) {
        let selectedFlight = flightInfo.filter(flight => id === flight.id);
        if(selectedFlight !== []){
            props.model.setSelectedFlight(selectedFlight);  
        }
    }

    function saveFlight(e){
        let selectedFlight = flightInfo.filter(flight => e.target.id === flight.id);
        props.model.saveFlightToDB(selectedFlight)
        alert("This flight has been saved!");
    }   
    
    function chooseFlight(e){
        getFlight(e.target.id);       
    }   

    let flightInfo = props.quotes.map((flight, index) =>
        ({
            source: props.places.find(a => a["PlaceId"] === flight["OutboundLeg"]["OriginId"]),
            destination: props.places.find(a => a["PlaceId"] === flight["OutboundLeg"]["DestinationId"]),
            price: flight["MinPrice"],
            departureDate: flight["OutboundLeg"]["DepartureDate"],
            returnDate: flight["InboundLeg"]["DepartureDate"],
            outboundCarrier: props.carriers.find(carrier => carrier["CarrierId"] === flight["OutboundLeg"]["CarrierIds"][0]),
            inboundCarrier: props.carriers.find(carrier => carrier["CarrierId"] === flight["InboundLeg"]["CarrierIds"][0]),
            currency: props.currencies[0],
            id: index
    }));

    if(flightInfo.length > 0) {
        return(
            <FlightsFormat info = {flightInfo} />
        );
    }
    else{
        return (
            <div>
                <h3><em>No flights available</em></h3>
                <FlightsFormat model = {props.model} />
            </div>
        )    
    }
 
    
}

export default Flights;