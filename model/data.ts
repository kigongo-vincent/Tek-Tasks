import { createSlice } from "@reduxjs/toolkit";
import { AlertAction, State, StateData, ThemeAction } from "../types";
import { LightMode } from "../theme";

const initialState: State = {
  alert: {
    body: "something went wrong",
    title: "Weak Password",
    mode: "normal",
  },
  sideBarStyles: "w-25 px-5",
  theme: LightMode,
  user: {
    email: "kigongovincent81@gmail.com",
    first_name: "kigongo",
    last_name: "vincent",
    user_id: 1,
    contact: "+256756643681",
    role: "company_admin",
    tokens: {
      access: "",
      refresh: "",
    },
  },
};

export const dataSlice = createSlice({
  initialState,
  name: "data_slice",
  reducers: {
    setTheme: (state: State, action: ThemeAction) => {
      state.theme = action.payload;
    },
    setSideBarStyles: (state: State, action) => {
      state.sideBarStyles = action.payload;
    },
    setAlert: (state: State, action) => {
      state.alert = action.payload;
    },
  },
  
});

export const getTheme = (state: StateData) => state?.data?.theme;
export const getSideBarStyles = (state: StateData) =>
  state?.data?.sideBarStyles;
export const getAlert = (state: { data: State }) => state?.data?.alert;

export const { setSideBarStyles, setAlert } = dataSlice.actions;

export default dataSlice.reducer;
