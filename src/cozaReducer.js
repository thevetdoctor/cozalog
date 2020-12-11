export default function reducer(state, action) {
    switch(action.type) {
        case 'ADD_DATA':
        // console.log(state, action.data);
        return {
            ...state,
            data: action.data};
        case 'IS_PRESENT':
        // console.log(state, action.value);
        return {
            ...state,
            isGoing: action.value};
        case 'GUESTS_NUM':
        // console.log(state, action.value);
        return {
            ...state,
            guestsNum: action.value};

        default:
        return state;
    }
};
 
export const initialState = {
    stateData: 'COZA',
    name: '',
    email: '',
    isGoing: false,
    guestsNum: 0
};
