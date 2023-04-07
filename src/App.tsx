import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyCard from "./PropertyCard";

// Importer "fetch" dans votre composant React :

import React, { useEffect, useState } from "react";
import Content from "./Content";

export interface PropertyType {
  title: String;
  summary: String;
  owner: {
    id: number;
    lastname: string;
    civility: string;
  };
  property_types: {
    entitled: string;
  };
  transaction_types: {
    id: number;
    entitled: string;
  };
  country: String;
  city: String;
  place_displayed: String;
  price: String;
  views: String;
  entitled: String;
  // Ajoutez d'autres propriétés ici si nécessaire
}

// Définir un état pour stocker les données de l'API :
function App() {
  const [property, setProperty] = useState<PropertyType[]>([]);

  // Utiliser la méthode "useEffect" pour effectuer la requête API une seule fois au chargement de la page :

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperty(data["hydra:member"]);
        console.log(data["hydra:member"][1]);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(property);
  // Utiliser les données de l'API dans votre composant :

  return (
    <div className="App">
      <Header />
      <Content property={property} />
      <div>
        {/* <Routes>
          <Route path="/" element={<Properties />}></Route>
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
