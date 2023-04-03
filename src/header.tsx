import Navbar from "./navbar";
// import PropertyCard from "./PropertyCard";
import PropertyList from "./PropertyList";

function Header() {
  return (
    <div>
      <Navbar />
      {/* <PropertyCard /> */}
      <div className="container">
        <PropertyList />
      </div>
    </div>
  );
}

export default Header;
