import ImgLogin from "../../../images/illustration-devices.svg";

const SignIn = () => {
  return (
    <section className="Containerd w-full flex items-center justify-center relative overflow-hidden">
      <div className="flex-1 ps-10 md:ps-40">
        <div className="flex flex-col space-y-5 md:space-y-10">
          <p className="text-grayishBlue flex items-center gap-2 md:gap-4 font-barlowCondensed text-sm md:text-lg tracking-wider">
            <strong className="bg-veryDarkBlue text-white px-2 py-1 rounded-full tracking-normal">
              NEW
            </strong>
            MONOGRAPH DASHBOARD
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-veryDarkBlue font-barlowCondensed font-bold">
            POWERFUL INSIGHTS INTO YOUR TEAM
          </h1>
          <p className="text-darkGrayishBlue font-barlow text-base md:text-lg">
            Project planning and time tracking for agile teams
          </p>
          <div className="pt-5 md:pt-9 flex items-center space-x-3 md:space-x-5">
            <button className="bg-reded p-3 px-5 rounded-xl text-white text-sm md:text-base font-barlow hover:bg-red-500">
              SCHEDULE A DEMO
            </button>
            <p className="text-grayishBlue font-barlow text-sm md:text-base tracking-wider">
              TO SEE A PREVIEW
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${ImgLogin})`,
          width: "50%",
          height: "60%",
        }}
      />
    </section>
  );
};

export default SignIn;
