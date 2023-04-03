export default function PropertyCard({
  title,
  summary,
  owner,
  property_type,
  transaction_types,
  country,
  city,
  place_displayed,
  price,
  views,
}: any) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">Titre : {title}</h5>
        <p className="card-text"> Sommaire : {summary}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Propriétaire : {owner}</li>
        <li className="list-group-item">Type de propriété : {property_type}</li>
        <li className="list-group-item">
          Type de transaction : {transaction_types}
        </li>
        <li className="list-group-item">Pays : {country}</li>
        <li className="list-group-item">Ville : {city}</li>
        <li className="list-group-item">Lieu affiché : {place_displayed}</li>
        <li className="list-group-item">Prix : {price}</li>
        <li className="list-group-item">Vues : {views}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Link property
        </a>
      </div>
    </div>
  );
}
