import { contactLinks } from "../constants";

const Social = () => {
  return (
    <ul className="flex justify-center">
      {contactLinks.map((el) => (
        <a
          key={el.name}
          href={el.link}
          className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125"
          target="_blank"
          rel="noreferrer"
        >
          <img alt={el.name} src={el.logo} className="w-8 h-8 ml-2 scale-150" />
        </a>
      ))}
    </ul>
  );
};

export default Social;
