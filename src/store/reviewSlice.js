import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const getRecomendation = createAsyncThunk(
    "reviewSlice/getDataItem",
    async (_, { rejectWithValue, getState, dispatch }) => {
        try {
            const response = await axios.get("http://localhost:8000/recomendation")

            const dataArr = []

            const prepareObjects = () => {
                response.data.forEach(element => {
                    const obj = {
                        message: "",
                        point: "",
                        checked: false,
                        id: nanoid()
                    }

                    obj.message = element.message
                    obj.point = element.point

                    dataArr.push(obj)
                });
            }

            prepareObjects()

            dispatch(createListItems({ dataArr: dataArr, category: "recomendation" }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const getError = createAsyncThunk(
    "reviewSlice/getDataItem",
    async (_, { rejectWithValue, getState, dispatch }) => {
        try {
            const response = await axios.get("http://localhost:8000/error")

            const dataArr = []

            const prepareObjects = () => {
                response.data.forEach(element => {
                    const obj = {
                        message: "",
                        point: "",
                        checked: false,
                        id: nanoid()
                    }

                    obj.message = element.message
                    obj.point = element.point

                    dataArr.push(obj)
                });
            }

            prepareObjects()

            dispatch(createListItems({ dataArr: dataArr, category: "error" }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const getResult = createAsyncThunk(
    "reviewSlice/getDataItem",
    async (_, { rejectWithValue, getState, dispatch }) => {
        try {
            const response = await axios.get("http://localhost:8000/result")

            const dataArr = []

            const prepareObjects = () => {
                response.data.forEach(element => {
                    const obj = {
                        message: "",
                        point: "",
                        checked: false,
                        id: nanoid()
                    }

                    obj.message = element.message
                    obj.point = element.point

                    dataArr.push(obj)
                });
            }

            prepareObjects()

            dispatch(createListItems({ dataArr: dataArr, category: "result" }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const reviewSlice = createSlice({
    name: "reviewSlice",
    initialState: {
        studentName: "",
        reviewMessage: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam consectetur, quaerat laborum eum architecto rem, dolorum labore iure ex autem blanditiis accusantium id sequi totam harum corporis saepe adipisci ratione!",
        recomendation: [],
        error: [],
        result: [],
        point: 0,
        htmlCode: ""
    },
    reducers: {
        addNameHandler(state, action) {
            state.studentName = action.payload.name
        },
        changeStatusItem(state, action) {
            switch (action.payload.category) {
                case "recomendation":
                    state.recomendation.map(item => {
                        if (item.id === action.payload.id) {
                            item.checked = !item.checked;
                        }
                    })
                    break;
                case "error":
                    state.error.map(item => {
                        if (item.id === action.payload.id) {
                            item.checked = !item.checked;
                        }
                    })
                    break;
                case "result":
                    state.result.map(item => {
                        if (item.id === action.payload.id) {
                            item.checked = !item.checked;
                        }
                    })
                    break;
                default:
                    console.log("Не правильная категория")
                    break;
            }
        },
        generateReviewHandler(state, action) {
            console.log(state.studentName)
            let recomendationTemplate = ""
            let errorTemplate = ""
            let resultTemplate = ""

            state.recomendation.forEach(element => {
                if (element.checked) {
                    recomendationTemplate += `<li>${element.message}</li>`
                }
            });
            state.error.forEach(element => {
                if (element.checked) {
                    errorTemplate += `<li>${element.message}: -${element.point} балла</li>`
                }
            });
            state.result.forEach(element => {
                if (element.checked) {
                    resultTemplate += `<li>${element.message}: ${element.point} балла</li>`
                }
            });

            state.htmlCode = `
<p>Здравствуйте, ${state.studentName}!</p>

<p>
    <br>
</p>

<h3 class='\"ql-align-center\"'><strong>Рецензия</strong></h3>

<p>${state.reviewMessage}</p>

<p><strong>Рекомендации:</strong></p>
<ol>
    ${recomendationTemplate}
</ol>

<p><strong>Что сделано не правильно:</strong></p>
<ol>
    ${errorTemplate}
</ol>

<p><strong>Итог:</strong></p>
<ol>
    ${resultTemplate}
</ol>

<p>
    <br>
</p>
<p>
    <br>
</p>

<p><em>С уважением, команда Attractor School.</em></p>

<p data-f-id="pbf"
    style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">
    Powered by
    <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">
        Froala Editor
    </a>
</p>
            `
        },
        createListItems(state, action) {
            state[action.payload.category] = action.payload.dataArr
        }
    },
    extraReducers: {

    }
})

export const { addNameHandler, changeStatusItem, generateReviewHandler, createListItems } = reviewSlice.actions;

export default reviewSlice.reducer;