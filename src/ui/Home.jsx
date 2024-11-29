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
      <div className="h-fit text-xl font-normal text-stone-50 md:absolute md:left-[7vw] md:top-[14vh] md:w-1/2">
        <div className="writing-mode-vertical-rl h-fit w-12 flex-col justify-center text-start text-8xl leading-[1.15] text-stone-50">
          <p>山</p>
          <p className="text-green1-500">林</p>
          <p>走</p>
          <p>走</p>
        </div>{" "}
      </div>
      <div className="h-fit text-xl font-normal text-stone-50 md:absolute md:right-0 md:top-[28vh] md:w-1/2">
        <div className="] ml-[15vh] flex h-fit w-1/5 overflow-hidden align-middle">
          <div className="writing-mode-vertical-rl h-fit w-6 text-start text-stone-50">
            找到最合適的出遊步道
          </div>{" "}
          <div className="writing-mode-vertical-lr h-fit w-6 pl-3 pt-40 text-start text-stone-50">
            台灣山林步道搜尋
          </div>{" "}
        </div>{" "}
        {/* {username === "" ? (
        <CreateUser />
      ) : ( */}
        <div className="h-fit md:w-fit md:pl-[30vw]">
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
