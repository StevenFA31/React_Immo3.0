import { PropertyType } from "./App";
import { Link } from "react-router-dom";

type propertyCardProps = {
  property: PropertyType;
};

export default function PropertyCard(props: propertyCardProps) {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={""}>
        <img className="rounded-t-lg" src={"../Maison_1.jpeg"} alt="" />
      </Link>
      <div className="p-5">
        <Link to={""}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.property.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.property.summary}
        </p>
        <div className="grid grid-cols-2">
          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Propriétaire : {props.property.owner.lastname}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Type de propriété : {props.property.property_types.entitled}
            </p>
          </div>
          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Type de transaction : {props.property.transaction_types.entitled}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Pays : {props.property.country}
            </p>
          </div>
          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ville : {props.property.city}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lieu suggéré : {props.property.place_displayed}
            </p>
          </div>
          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Prix : {props.property.price}€
            </p>
          </div>
        </div>
        <div className="flex">
          <Link
            to={""}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex-none"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <p className=" font-normal text-gray-700 dark:text-gray-400 flex-auto text-right">
            {props.property.views} Vues
          </p>
        </div>
      </div>
    </div>
  );
}
