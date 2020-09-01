import React, {Component} from "react";
import Titre from "../../../components/UI/Titres/TitreH1";
import Button from "react-bootstrap/Button";
import {LinkContainer} from 'react-router-bootstrap';
import {Route} from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";

class Contact extends Component {
    render() {
        return (
            <>
                <Titre>Contactez-nous !</Titre>
                <div>
                    <h2>Adresse</h2>
                    <p>Route du chateau</p>
                    <h2>Téléphone</h2>
                    <p>xxxxxxxxxxx</p>
                </div>
                <h2>Vous préférez nous écrire ?</h2>
                <LinkContainer to={this.props.match.path + "/form"}>
                    <Button variant="info">Formulaire de contact</Button>
                </LinkContainer>
                <Route path={this.props.match.path + "/form"} render={(props) => <ContactForm />}></Route>


            </>
        )
    }

}

export default Contact;