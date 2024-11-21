import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/user/userSlice";
// import favTrailListReducer from "./features/trailList/favTrailSlice";
import trailReducer from "./features/trailList/trailSlice";
import userReducer from "./features/user/userSlice";
import uiReducer from "./ui/uiSlice";
import favTrailReducer from "./features/favList/favTrailSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // favTrailList: favTrailListReducer,
    trail: trailReducer,
    ui: uiReducer,
    favTrail: favTrailReducer,
  },
});

export default store;
