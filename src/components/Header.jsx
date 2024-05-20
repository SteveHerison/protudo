const Header = () => {
  return (
    <section className="h-48 w-full flex justify-between items-center px-8 md:px-36 ">
      <h1 className="text-veryDarkBlue font-barlowCondensed font-bold text-lg md:text-2xl">
        Logo
      </h1>
      <ul className="flex space-x-4 md:space-x-16 ">
        <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold">
          PRODUCT
        </li>
        <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold">
          FEATURES
        </li>
        <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold">
          PRICING
        </li>
        <li className="cursor-pointer font-barlowCondensed font-semibold text-grayishBlue">
          LOGIN
        </li>
      </ul>
    </section>
  );
};

export default Header;
