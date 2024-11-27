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
      <h1 className="absolute top-40 mb-10 w-screen text-center text-xl font-semibold text-stone-50">
        找到最合適的出遊步道
        <br />
        <span className="text-stone-50">台灣山林步道搜尋</span>{" "}
        {/* {username === "" ? (
        <CreateUser />
      ) : ( */}
        <br />
        <Button to="/trails" type="secondary">
          我要搜尋
        </Button>
        {/* )} */}
      </h1>
    </div>
  );
}

export default Home;
