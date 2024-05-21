import ImgLogin from "../../../images/illustration-devices.svg";

const SignIn = () => {
  return (
    <section className="Containerd w-full flex flex-col-reverse md:flex-row items-center justify-between md:justify-center relative overflow-hidden ">
      <div className="md:flex-1  md:ps-40">
        <div className="flex flex-col space-y-5 md:space-y-10 px-5 md:p-0">
          <p className="text-grayishBlue flex items-center gap-7 md:gap-4 font-barlowCondensed text-sm md:text-lg tracking-wider ">
            <strong className="bg-veryDarkBlue text-white px-2 py-1 rounded-full tracking-normal text-md">
              NEW
            </strong>
            MONOGRAPH DASHBOARD
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-veryDarkBlue font-barlowCondensed font-bold">
            POWERFUL INSIGHTS INTO YOUR TEAM
          </h1>
          <p className="text-darkGrayishBlue font-barlow text-base md:text-lg">
            Project planning and time tracking for agile teams
          </p>
          <div className="pt-5 md:pt-9 flex items-center  md:space-x-5">
            <button className="bg-reded md:p-3 px-4 py-3 md:px-5 rounded-xl text-white text-sm md:text-base font-barlow hover:bg-red-500">
              SCHEDULE A DEMO
            </button>
            <p className="text-grayishBlue font-barlow text-sm md:text-base tracking-widest ps-6">
              TO SEE A PREVIEW
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-no-repeat  h-72 w-full md:-right-40 md:w-[45%] md:h-[62%]"
        style={{
          backgroundImage: `url(${ImgLogin})`,
        }}
      />
    </section>
  );
};

export default SignIn;
