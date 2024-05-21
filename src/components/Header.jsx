import { useState } from "react";
import Hambor from "../../images/icon-hamburger.svg";
import Close from "../../images/icon-close.svg";
import HeaderMob from "./headerMob/HeaderMob";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="md:h-48 h-20 w-full flex justify-between items-center px-8 md:px-36 ">
      <h1 className="text-veryDarkBlue font-barlowCondensed font-bold text-lg md:text-2xl">
        Logo
      </h1>
      <ul className="md:flex space-x-4 md:space-x-16 hidden">
        <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold hover:underline ">
          PRODUCT
        </li>
        <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold hover:underline">
          FEATURES
        </li>
        <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold hover:underline">
          PRICING
        </li>
        <li className="cursor-pointer font-barlowCondensed font-semibold text-grayishBlue hover:underline">
          LOGIN
        </li>
      </ul>
      {!active ? (
        <img
          src={Hambor}
          alt=""
          className="md:hidden "
          onClick={() => setActive(true)}
        />
      ) : (
        <img
          src={Close}
          alt=""
          className="md:hidden "
          onClick={() => setActive(!active)}
        />
      )}
      <HeaderMob active={active} />
    </section>
  );
};

export default Header;
