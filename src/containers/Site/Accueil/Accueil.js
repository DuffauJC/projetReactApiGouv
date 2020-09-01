import React from "react";
import Titre from "../../../components/UI/Titres/TitreH1"
import Image from 'react-bootstrap/Image'
import imgAccueil from '../../../assets/images/capitole.jpg'

const Accueil=(props)=>(
    <>
            <Titre>Bienvenue sur le site de la Violette</Titre>
            <p>Le site des établissements publics de la Haute-garonne.</p>
            <Image src={imgAccueil} fluid thumbnail style={{width:"100%"}} />
        </>
);

export default Accueil;