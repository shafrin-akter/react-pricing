const Link = ({ link }) => {
  console.log(link);
  return (
    <div>
      <li className="mr-10">
        <a href={link.url}>{link.name}</a>
      </li>
    </div>
  );
};

export default Link;
