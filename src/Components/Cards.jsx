import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faLocationDot} className="icon"/>
export default function Card(props){
    return(
        <div className="container1">
            <div className="image">
            <img src={props.item.imageUrl}/>
            </div>

            <div className="data">

            <h2>{element}   {props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></h2>
            
            <h1>{props.item.title}</h1>
            <p><b>{props.item.startDate} - {props.item.endDate}</b></p>
            <p>{props.item.description}</p>
            </div>
            
        </div>
    )

}