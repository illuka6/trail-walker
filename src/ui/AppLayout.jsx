import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();
  console.log("navigation: ", navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="relative grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />

      <div className="overflow-scroll">
        <main className="px-auto">
          {/* <h1>Content</h1> */}
          <Outlet />
        </main>
      </div>
      {/* // <CartOverview /> */}
    </div>
  );
}

export default AppLayout;
