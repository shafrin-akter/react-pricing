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
  return (
    <div>
      <ul className="flex">
        {navberData.map((link) => (
          <Link key={link.id} link={link}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navber;
