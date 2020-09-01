import React, {Component} from "react";
import Titre from "../../../components/UI/Titres/TitreH1";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Etablissement from "../Localisation/Etablissement/Etablissement";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Localisation extends Component{
    state={
        recherche:null
    }
    rechercheEtab=(type)=>{
axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/31/${type}`)
    .then(response=>{
        console.log(response.data);
        this.setState({recherche :response.data.features})
    })
    }
    render() {
        return(
            <>
                <Titre>Rechercher un établissement :</Titre>
                <Button variant="secondary" onClick={()=> this.rechercheEtab('mairie')}>Mairie</Button>
                <Button variant="secondary" onClick={()=> this.rechercheEtab('commissariat_police')}>Commissariat de police</Button>
                <Button variant="secondary" onClick={()=> this.rechercheEtab('pole_emploi')}>Pôle emploi</Button>
                <Button variant="secondary" onClick={()=> this.rechercheEtab('prefecture')}>Préfecture</Button>
                <Row>
                    {this.state.recherche && this.state.recherche.map(etablissement=>{
                        return (
                            <Col md="6" key={etablissement.properties.id}>
                                <Etablissement
                                    adresses={etablissement.properties.adresses}
                                    horaires ={etablissement.properties.horaires}
                                    id ={etablissement.properties.id}
                                    nom ={etablissement.properties.nom}
                                    telephone ={etablissement.properties.telephone}
                                    mail ={etablissement.properties.email}
                                    url ={etablissement.properties.url}
                                />
                            </Col>
                        )
                    })}
                </Row>


                </>
        );
    }
}

export default Localisation;