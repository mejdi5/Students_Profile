import {ADDTAG, GETALLSTUDENTS, FILTER} from "./ActionTypes"
import axios from 'axios';



export const getAllStudents = () => (dispatch) => {
    axios
    .get("https://api.hatchways.io/assessment/students")
    .then((res) => dispatch({ type: GETALLSTUDENTS, payload: res.data.students }))
    .catch((err) => console.log(err));
};

export const addTag = (id, text) => ({
    type: ADDTAG,
    id,
    text
})

export const filterByTags = (payload) => ({
    type: FILTER,
    payload
});
