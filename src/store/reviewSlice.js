import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
    "reviewSlice/getData",
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`http://localhost:8000/${data.documentType}/${data.documentId}`)
            const dataArray = []

            response.data.forEach(item => {
                const obj = {
                    message: item.message,
                    point: item.point,
                    checked: false,
                    id: nanoid()
                }

                dataArray.push(obj)
            })

            localStorage.setItem(data.documentType, JSON.stringify(dataArray))
            dispatch(createListItems({ dataArr: dataArray, category: data.documentType }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const reviewSlice = createSlice({
    name: "reviewSlice",
    initialState: {
        studentName: "",
        reviewMessage: "",
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
            // console.log(state.studentName)
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
        },
        getDataFromLocalStorage(state) {
            if (localStorage.getItem("recomendation")) {
                state.recomendation = JSON.parse(localStorage.getItem("recomendation"))
            }

            if (localStorage.getItem("error")) {
                state.error = JSON.parse(localStorage.getItem("error"))
            }

            if (localStorage.getItem("result")) {
                state.result = JSON.parse(localStorage.getItem("result"))
            }


        },
        resetDataFromLocalStorage(state) {
            localStorage.removeItem("recomendation")
            localStorage.removeItem("error")
            localStorage.removeItem("result")

            state.recomendation = []
            state.error = []
            state.result = []
        }
    }
})

export const { addNameHandler, changeStatusItem, generateReviewHandler, createListItems, getDataFromLocalStorage, resetDataFromLocalStorage } = reviewSlice.actions;

export default reviewSlice.reducer;