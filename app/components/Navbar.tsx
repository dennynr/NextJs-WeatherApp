"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 gap-5 p-5 border-b-2 border-black" style={{backgroundColor:'#ffc567'}}>
      <div className="grid grid-cols-2 items-center justify-start">
        <p className="text-2xl">Weather App</p>
      </div>
      <div className="grid grid-cols-1 gap-1 items-center">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            className="placeholder:italic placeholder:text-gray-800 block w-full border-2 border-black rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Cari Kota Disini..."
            type="text"
            name="search"
            style={{backgroundColor:'#ffaf2f'}}
          />
        </label>
      </div>
      <div className="grid grid-cols-2 item">
        <div className="space-x-4">
          <button onClick={() => alert("hello world")}>
            {" "}
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </button>
          <button onClick={() => alert("hello world")}>
            {" "}
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
