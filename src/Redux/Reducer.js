import {ADDTAG, GETALLSTUDENTS, FILTER} from "./ActionTypes";


const initialState = {
    Students: [],
    tags:[],
    filterString:""
};


const Reducer = (state = initialState, action) => {
switch(action.type) {

    case ADDTAG: 
    return {...state, tags: [...state.tags, {id: action.id, text: action.text}] }
    
    case GETALLSTUDENTS:
    return {...state, Students: action.payload}

    case FILTER:
    return {...state, filterString: action.payload}

    default:
    return state;
    }
}

export default Reducer