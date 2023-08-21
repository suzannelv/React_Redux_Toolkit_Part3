import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 888,
    },
    reducers: {
        // 下面的函数都是放在counterSlice.actions里面的

        addNumber(state, { payload }) {
            state.counter = state.counter + payload;
        },
        subNumber(state, { payload }) {
            // console.log("counter reducer subNumber", action);
            // const payload = action.payload;
            // action的另一个属性是action.payload, 所以在参数里，可以写成结构形式
            // 传过来的参数都是在action的payload里面
            state.counter = state.counter - payload;
        },
    },
});

export const { addNumber, subNumber } = counterSlice.actions;
// 使用 counterSlice.reducer 导出了该 slice 的 reducer

export default counterSlice.reducer;
