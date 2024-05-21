const HeaderMob = ({ active }) => {
  return (
    <>
      {active && (
        <section className="absolute top-20 -left-0 z-50 justify-center flex w-full ">
          <div className="bg-white rounded-lg shadow-lg w-80 flex h-52 px-5">
            {/* Conteúdo do menu móvel */}
            <ul className="flex flex-col space-y-4 justify-center items-center w-full ">
              <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold w-full text-center  hover:underline">
                PRODUCT
              </li>
              <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold w-full text-center hover:underline">
                FEATURES
              </li>
              <li className="cursor-pointer text-veryDarkBlue font-barlowCondensed font-semibold border-b pb-5 w-full text-center hover:underline">
                PRICING
              </li>
              <li className="cursor-pointer text-grayishBlue font-barlowCondensed font-semibold w-full text-center hover:underline">
                LOGIN
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default HeaderMob;
