// import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  // const username = useSelector((state) => state.user.userName);

  // navigate("/menu");

  // console.log("selector: ", selector);
  return (
    <div className="flex">
      <div
        className="last:100 h-screen w-screen bg-[url()] bg-cover bg-center px-4 py-10 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/public/img/bg1.jpeg')",
        }}
      ></div>
      <div className="absolute top-[22vh] w-fit text-stone-50 md:left-[8vw] md:top-[14vh] md:h-fit md:w-1/2 md:text-xl md:font-normal">
        <div className="md:writing-mode-vertical-rl flex h-fit w-screen justify-center text-6xl md:h-fit md:w-12 md:flex-col md:justify-center md:text-start md:text-8xl md:leading-[1.15] md:text-stone-50">
          <p>山</p>
          <p className="text-green1-500">林</p>
          <p>走</p>
          <p>走</p>
        </div>{" "}
      </div>
      <div className="absolute top-[60vh] w-full flex-col items-center justify-center text-sm font-normal text-stone-50 md:right-0 md:top-[28vh] md:h-fit md:w-1/2 md:text-xl">
        <div className="h-fit w-full items-center justify-center overflow-hidden md:ml-[15vh] md:flex md:w-1/5">
          <div className="md:writing-mode-vertical-rl h-fit w-full items-center text-center text-stone-50 md:w-6 md:text-start">
            找到最合適的出遊步道
          </div>{" "}
          <div className="md:writing-mode-vertical-lr mt-[2vh] h-fit w-full items-center text-center text-stone-50 md:mt-0 md:w-6 md:pl-3 md:pt-40 md:text-start">
            台灣山林步道搜尋
          </div>{" "}
        </div>{" "}
        {/* {username === "" ? (
        <CreateUser />
      ) : ( */}
        <div className="mt-14 flex h-fit justify-center md:mt-0 md:w-fit md:pl-[30vw]">
          <Button to="/trails" type="secondary">
            我要搜尋
          </Button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Home;
