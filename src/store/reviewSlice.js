import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataItem = createAsyncThunk(
    "reviewSlice/getDataItem",
    async (_, { rejectWithValue, getState, dispatch }) => {
        try {
            const response = await axios.get("http://localhost:8000/getdata")

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

            dispatch(createListItems(dataArr))
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
        recomendation: [
            // { message: "Recomendation 1", point: "0.1", checked: false, id: nanoid() },
            // { message: "Recomendation 2", point: "0.2", checked: false, id: nanoid() },
            // { message: "Recomendation 3", point: "0.3", checked: false, id: nanoid() },
        ],
        error: [
            // { message: "Error 1", point: 1.1, checked: false, id: nanoid() },
            // { message: "Error 2", point: 1.2, checked: false, id: nanoid() },
            // { message: "Error 3", point: 1.3, checked: false, id: nanoid() },
        ],
        result: [
            // { message: "Result 1", point: 2.1, checked: false, id: nanoid() },
            // { message: "Result 2", point: 2.2, checked: false, id: nanoid() },
            // { message: "Result 3", point: 2.3, checked: false, id: nanoid() },
        ],
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

            // console.log(reviewTemplate)
        },
        createListItems(state, action) {
            state.error = action.payload
        }
    },
    extraReducers: {

    }
})

export const { addNameHandler, changeStatusItem, generateReviewHandler, createListItems } = reviewSlice.actions;

export default reviewSlice.reducer;