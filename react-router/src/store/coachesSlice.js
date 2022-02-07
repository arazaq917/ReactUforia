import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  COACH_DATA: [
    {
      key: "c1",
      name: "Abdul",
      email: "max@gmail.com",
      desc: "React Router DOM enables you to implement dynamic routing in a web app. a running app, React Router DOM",
    },
    {
      key: "c2",
      name: "Razaq",
      email: "max@gmail.com",
      desc: "React Router DOM enables you to implement dynamic routing in a web app. a running app, React Router DOM",
    },
    {
      key: "c3",
      name: "Maaz",
      email: "max@gmail.com",
      desc: "React Router DOM enables you to implement dynamic routing in a web app. a running app, React Router DOM",
    },
  ]
} ;

const coachSlice = createSlice({
  name: "coach",
  initialState: initialState,
  reducers: {
    getInput: (state, action) => {
      const data= {
        key: Math.random().toString(),
        name: action.payload.coachName,
        email: action.payload.coachEmail,
        desc: action.payload.coachDesc
      };
      state.COACH_DATA.push(data);

    },
  },
});

export const coachAction = coachSlice.actions;

export default coachSlice;