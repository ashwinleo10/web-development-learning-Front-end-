//Newer version of store.js using redux toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Ashwin",
    balance: 25000,
  },

  reducers: {
    addMoney: (state, action) => {
      state.balance += action.payload;
    },
    removeMoney: (state, action) => {
      state.balance -= action.payload;
    }
},
});

export const { addMoney, removeMoney } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;

//Older version of store.js using redux

// import { createStore } from "@reduxjs/toolkit"

// //initial state
// const initialState = {
//     user: {
//         username: "Ashwin",
//         balance: 25000,
//     },
// };

// //Action
// export const addMoney = (amount) => ({
//     type: "addMoney",
//     payload: amount,
// });

// export const removeMoney = (amount) => ({
//     type: "removeMoney",
//     payload: amount,
// });

// //Reducer
// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case "addMoney":
//             return {
//                 user: {
//                     username: state.user.username,
//                     balance: state.user.balance + action.payload,
//                 },
//             };
//         case "removeMoney":
//             return {
//                 user: {
//                     username: state.user.username,
//                     balance: state.user.balance - action.payload,
//                 },
//             };
//         default:
//             return state;
//     }
// }

// const store = createStore(reducer);
// export default store;