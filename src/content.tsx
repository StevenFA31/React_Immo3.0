import PropertyCard from "./PropertyCard";
import { PropertyType } from "./App";

type contentProps = {
  property: PropertyType[];
};

function Content(props: contentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-4">
      {props.property.map((item, index) => (
        <PropertyCard key={index} property={item} />
      ))}
    </div>
  );
}

export default Content;
