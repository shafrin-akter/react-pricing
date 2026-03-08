import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import Link from "./Link";

const navberData = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
  },
  {
    id: 4,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 5,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 6,
    name: "Contact",
    url: "/contact",
  },
];
const Navber = () => {
  const links = navberData.map((link) => (
    <Link key={link.id} link={link}></Link>
  ));

  const [togle, setTogle] = useState(false);
  return (
    <nav className="flex justify-between mx-10 mt-4">
      <div className="flex gap-2 items-center" onClick={() => setTogle(!togle)}>
        {togle ? (
          <IoIosClose className="lg:hidden"></IoIosClose>
        ) : (
          <FiAlignRight className="lg:hidden"></FiAlignRight>
        )}

        <ul className={`lg:hidden ${togle ? "top-15" : "-top-40"} absolute `}>
          {links}
        </ul>

        <h2>My Navber</h2>
      </div>
      <ul className="lg:flex hidden text-end">{links}</ul>
      <button className="btn">Sign In</button>
    </nav>
  );
};

export default Navber;
