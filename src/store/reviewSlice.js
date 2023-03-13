import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "reviewSlice",
    initialState: {
        studentName: "",
        recomendation: [
            { message: "Recomendation 1", point: "0.1", checked: false },
            { message: "Recomendation 2", point: "0.2", checked: false },
            { message: "Recomendation 3", point: "0.3", checked: false },
        ],
        error: [
            { message: "Error 1", point: 1.1, checked: false },
            { message: "Error 2", point: 1.2, checked: false },
            { message: "Error 3", point: 1.3, checked: false },
        ],
        result: [
            { message: "Result 1", point: 2.1, checked: false },
            { message: "Result 2", point: 2.2, checked: false },
            { message: "Result 3", point: 2.3, checked: false },
        ],
        point: 0
    },
    reducers: {
        addNameHandler(state, action) {
            state.studentName = action.payload.name
        }
    }
})

export const { addNameHandler } = reviewSlice.actions;

export default reviewSlice.reducer;