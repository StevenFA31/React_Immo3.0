import Navbar from "./navbar";
import Search from "./search";

function Header() {
  return (
    <div className="flex flex-col justify-between h-96 bg-[url('../assets/pexels-vecislavas-popa-1643389.jpg')] bg-cover bg-no-repeat ">
      <Navbar />
      <Search />
    </div>
  );
}

export default Header;
