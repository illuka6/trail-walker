import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const FAKE_USER = {
  userId: 1,
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      //redux toolkit 的reducers默認只接收一個payload
      //需要傳入兩個以上payload時，使用prepare()
      prepare(email, password) {
        return {
          payload: { email, password },
        };
      },
      reducer(state, action) {
        if (
          action.payload.email === FAKE_USER.email &&
          action.payload.password === FAKE_USER.password
        ) {
          state.isAuthenticated = true;
          // state.user = action.payload.email;
          state.user = FAKE_USER;
        }
      },
    },
    // login(state, action) {
    //   state.user = action.payload;
    //   state.isAuthenticated = true;
    // },
    logout(state, action) {
      state.user = action.payload;
      state.isAuthenticated = false;
      // dispatch(hideLoginModule());
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
