import PropertyType from "./App";
import { useState } from "react";

function Search() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  // const [selectdType, setSelectedType] = useState("");
  // const PropertyFiltres = Propertys.filter((Property) => Property.type === PropertyType);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg container mx-auto bg-slate-400 rounded-xl mt-56"
    >
      <div className="flex flex-wrap  ">
        <div className="w-full px-3 mx-4 my-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Lieu
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-text"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2 ">
        <div className="w-full md:w-1/3 flex-auto px-10 pb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Type de propriété
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              // value={PropertyType}
              // onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">-- Sélectionnez un type --</option>
              {/* {PropertyType.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))} */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex-auto px-10 pb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Type de transaction
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              {/* for( let i = 0; i<= transaction_types.lenght; i++ ){

              } */}
              <option></option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
