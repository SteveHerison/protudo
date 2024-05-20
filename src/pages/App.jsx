import Header from "../components/Header";
import SignIn from "./login/SignIn";

const App = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="bg-customLightBlue absolute top-0 right-0 h-2/4 w-1/2 rounded-bl-[5rem] z-[-1]" />
      <Header />
      <SignIn />
    </div>
  );
};

export default App;
