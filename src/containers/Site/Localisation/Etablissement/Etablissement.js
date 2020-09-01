import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Horaires from "./Horaires/Horaires";

const etablissement = (props) => (
    <div>
        <Card>
            <Card.Header>{props.nom}</Card.Header>
            <Card.Body>
                <Card.Title>
                    Telephone : {props.telephone}<br/>
                    {props.mail && `Mail : ${props.mail}`}
                </Card.Title>
                <Card.Text>
                    <strong>Adresse : </strong><br/>
                    {props.adresses[0].lignes}<br/>
                    {props.adresses[0].codePostal} - {props.adresses[0].commune}
                    <br/>
                    <strong>Horaire : </strong><br/>
                    {props.horaires && <Horaires horaires ={props.horaires}/>}<br/>
                    {props.url && <a href={props.url} className={"btn btn-info"} target={"_blank"}>Visiter le site web</a> }
                </Card.Text>

            </Card.Body>
        </Card>
    </div>
);

export default etablissement;