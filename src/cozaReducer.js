export default function reducer(state, action) {
    switch(action.type) {
        case 'ADD_DEPARTMENTS':
            const departmentsState = {
                ...state.stateData,
                departments: action.departments};
        return { stateData: departmentsState };

        case 'ADD_NAME':
            const nameState = {
                ...state.stateData,
                name: action.data};
        return { stateData: nameState };

        case 'ADD_EMAIL':
            const emailState = {
                ...state.stateData,
                email: action.data};
        return {stateData: emailState };

        case 'ADD_BIRTHDATE':
            const birthDateState = {
                ...state.stateData,
                birthdate: action.data};
        return {stateData: birthDateState };

        case 'ADD_GENDER':
            const genderState = {
                ...state.stateData,
                gender: action.data};
            // console.log(action.gender, genderState);
            return {stateData: genderState };

        case 'ADD_DEPARTMENT':
            const departmentState = {
                ...state.stateData,
                department: action.data};
        return {stateData: departmentState };

        case 'ADD_ISPRESENT':
            const isPresentState = {
                ...state.stateData,
                isPresent: (action.data === 'Present') ? true : false};
            // console.log(action.value, isPresentState);
        return { stateData: isPresentState };
        
        case 'ADD_MESSAGE_TITLE':
            const messageTitleState = {
                ...state.stateData,
                message_title: action.data};
        return { stateData: messageTitleState };
        
        case 'ADD_MESSAGE_SUMMARY':
            const messageSummaryState = {
                ...state.stateData,
                message_summary: action.data};
        return { stateData: messageSummaryState };

        default:
        return state;
    }
};
 
export const initialState = {
    stateData: {
        name: '',
        email: '',
        gender: '',
        birthdate: '',
        department: '',
        isPresent: false,
        departments: [],
        message_title: '',
        message_summary: ''
    }
};
