import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import { useEffect, useRef, useState } from "react";
function AppLayout() {
  const navigation = useNavigation();
  console.log("navigation: ", navigation);
  const isLoading = navigation.state === "loading";

  

const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    const handleScroll = () => {
      setScrolled(el.scrollTop > 50);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="relative grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header scrolled={scrolled}/>

      <div  ref={scrollRef}  className="overflow-scroll">
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
