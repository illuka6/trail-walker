import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
// import TrailList, {
//   loader as trailsLoader,
// } from "./features/trailList/TrailList_v0";
import { loader as trailsLoader } from "./features/trailList/TrailsSearch";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Login from "./features/user/Login";
import TrailsSearch from "./features/trailList/TrailsSearch";
import LoginModule from "./ui/LoginModule";
import FavTrailList from "./features/favList/FavTrailList";
// import { action as updateOrderAction } from "./features/order/UpdateOrder";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/trails",
          element: <TrailsSearch />,
          loader: trailsLoader,
          errorElement: <Error />,
        },
        {
          path: "/login",
          // element: <CreateOrder />,
          element: <Login />,
          // action: createUserAction,
        },
        {
          path: "/about",
          // element: <CreateOrder />,
          element: <FavTrailList />,
          // action: createUserAction,
        },
        {
          path: "/user/:userId",
          // element: <UserFavList />,
          // loader: favListLoader,
          // action: updatefavListAction,
          // errorElement: <Error />,
        },
      ],
    },
    // future: {
    // v7_skipActionErrorRevalidation: true, // 提前啟用 v7 的行為
    // }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
