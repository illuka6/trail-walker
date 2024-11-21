// import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  // const username = useSelector((state) => state.user.userName);

  // navigate("/menu");

  // console.log("selector: ", selector);
  return (
    <div className="flex">
      <div className="last:100 h-screen w-screen bg-[url('https://images.unsplash.com/photo-1670736179375-bf8f6f71fc7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center px-4 py-10 text-center sm:py-16 md:w-[50vw]"></div>
      <h1 className="absolute top-40 mb-10 w-screen text-center text-xl font-semibold text-stone-50 md:w-[50vw] md:text-3xl">
        找到最合適的出遊步道
        <br />
        <span className="text-stone-100">台灣山林步道搜尋</span>{" "}
        {/* {username === "" ? (
        <CreateUser />
      ) : ( */}
        <br />
        <Button to="/trails" type="primary">
          我要搜尋
        </Button>
        {/* )} */}
      </h1>
    </div>
  );
}

export default Home;
