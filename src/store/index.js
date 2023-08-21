import { configureStore } from "@reduxjs/toolkit";
// 导出时被重命名为 counterReducer。这是合法的 JavaScript 语法。
import counterReducer from "./features/counter";
import homeReducer from "./features/home";

const store = configureStore({
    reducer: {
        // counter表示的是counter模块
        counter: counterReducer,
        home: homeReducer,
    },
});

// redux-thunk核心逻辑
// function thunk(store) {
//     const next = store.dispatch;
//     function dispatchThunk(action) {
//         if(typeof action === "function") {
//             action(store.dispatch, store.getState)

//         } else {
//             next(action)
//         }
//     }
//     store.dispatch = dispatchThunk;
// }
// thunk(store);

// store.dispatch(function(dispatch, getState){
//  dispatch({})
// })

export default store;
