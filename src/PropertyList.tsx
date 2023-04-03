import PropertyCard from "./PropertyCard";
import "./style/PropertyList.css";

// Importer "fetch" dans votre composant React :

import React, { useEffect, useState } from "react";

// Définir un état pour stocker les données de l'API :
function Properties() {
  interface PropertyType {
    title: String;
    summary: String;
    owner: String;
    property_types: {
      id: number;
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

  // Utiliser les données de l'API dans votre composant :

  return (
    <div className="aChanger">
      {property.map((item, index) => (
        <PropertyCard
          key={index}
          title={item.title}
          summary={item.summary}
          owner={item.owner}
          property_type={item.property_types.entitled}
          transaction_types={item.transaction_types.entitled}
          country={item.country}
          city={item.city}
          place_displayed={item.place_displayed}
          price={item.price}
          views={item.views}
        />
      ))}
    </div>
  );
}

export default Properties;
