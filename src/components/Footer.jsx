import reactLogo from "../assets/icons/favicon.ico";

const Footer = () => {
  return (
    <div
      className={
        "w-full bg-gray-900 text-gray-100 text-lg py-3 flex flex-col justify-center"
      }
    >
      <div className="flex flex-row justify-center text-center">
        <p>Made with </p>
        <p className="text-red-500 px-2 text-2xl">&#10084;</p>
        <p>and&nbsp;</p>
        <img alt="react" src={reactLogo} className="w-5 h-5 mt-1" />
        <p>&nbsp;by Vipul Kumar</p>
      </div>
      <p className="text-center">
        All logos and brand names belong to their respective owners.
      </p>
      <p className="text-center">
        Copyright &#169; {new Date().getFullYear()} mrvipulkumar.com
      </p>
    </div>
  );
};

export default Footer;
