export default function reducer(state, action) {
    switch(action.type) {
        case "SET_USER":
            return {
              ...state,
              user: action.user
            }        
            
        case 'ADD_DEPARTMENTS':
            const departmentsState = {
                ...state,
                departments: action.departments};
                localStorage.setItem('departments', JSON.stringify(action.departments));
        return departmentsState;
        
        case 'ADD_REPORTS':
            const reportsState = {
                ...state,
                reports: action.reports};
                // localStorage.setItem('reports', JSON.stringify(action.reports));
        return reportsState;
        
        case 'ADD_REGISTRATIONS':
            const registrationState = {
                ...state,
                registrations: action.registrations};
                // localStorage.setItem('reports', JSON.stringify(action.reports));
        return registrationState;

        case 'ADD_NAME':
            const nameState = {
                ...state.stateData,
                name: action.data};
        return { ...state, stateData: nameState };

        case 'ADD_EMAIL':
            const emailState = {
                ...state.stateData,
                email: action.data};
        return { ...state, stateData: emailState };

        case 'ADD_BIRTHDATE':
            const birthDateState = {
                ...state.stateData,
                birthdate: action.data};
        return { ...state, stateData: birthDateState };

        case 'ADD_GENDER':
            const genderState = {
                ...state.stateData,
                gender: action.data};
            // console.log(action.gender, genderState);
        return { ...state, stateData: genderState };

        case 'ADD_DEPARTMENT':
            const departmentState = {
                ...state.stateData,
                department: action.data};
        return { ...state, stateData: departmentState };

        case 'ADD_ISPRESENT':
            const isPresentState = {
                ...state.stateData,
                isPresent: ((action.data === 'Present') ? true : (action.data === 'Absent' ? false : null))};
            console.log(action.data, isPresentState);
        return { ...state, stateData: isPresentState };
        
        case 'ADD_MESSAGE_TITLE':
            const messageTitleState = {
                ...state.stateData,
                message_title: action.data};
        return { ...state, stateData: messageTitleState };
        
        case 'ADD_MESSAGE_SUMMARY':
            const messageSummaryState = {
                ...state.stateData,
                message_summary: action.data};
        return { ...state, stateData: messageSummaryState };
        
        case 'ADD_POST_SERVICE_PRAYER':
            const postServicePrayerState = {
                ...state.stateData,
                post_service_prayer: action.data};
        return { ...state, stateData: postServicePrayerState };
      
        case 'ADD_PHONE_NUMBER':
            const phoneNumberState = {
                ...state.registrationData,
                phone_number: action.data};
                console.log(action);
        return { ...state, registrationData: phoneNumberState };
        
        case 'ADD_IMAGE_URL':
            const imageUrlState = {
                ...state.registrationData,
                image_url: action.data};
                console.log(action);
        return { ...state, registrationData: imageUrlState };

        case 'ADD_FIRST_NAME':
            const firstNameState = {
                ...state.registrationData,
                first_name: action.data};
        return { ...state, registrationData:firstNameState };

        case 'ADD_LAST_NAME':
            const lastNameState = {
                ...state.registrationData,
                last_name: action.data};
        return { ...state, registrationData: lastNameState };

        case 'ADD_REG_EMAIL':
            const regEmailState = {
                ...state.registrationData,
                reg_email: action.data};
        return { ...state, registrationData: regEmailState };

        case 'ADD_REG_GENDER':
            const regGenderState = {
                ...state.registrationData,
                reg_gender: action.data};
        return { ...state, registrationData: regGenderState };

        case 'ADD_REG_BIRTH_DATE':
            const regBirthDateState = {
                ...state.registrationData,
                reg_birth_date: action.data};
        return { ...state, registrationData: regBirthDateState };

        case 'ADD_CONTACT_ADDRESS':
            const contactAddressState = {
                ...state.registrationData,
                contact_address: action.data};
        return { ...state, registrationData: contactAddressState };

        case 'ADD_MARITAL_STATUS':
            let maritalDetails = (action.data === 'Married') ? '' : 'Not applicable';
            const maritalStatusState = {
                    ...state.registrationData, marital_status: action.data, spouse_name: maritalDetails, wedding_date: maritalDetails
                }
        return { ...state, registrationData: maritalStatusState };

        case 'ADD_SPOUSE_NAME':
            const spouseNameState = {
                ...state.registrationData,
                spouse_name: action.data};
        return { ...state, registrationData: spouseNameState };

        case 'ADD_WEDDING_DATE':
            const weddingDateState = {
                ...state.registrationData,
                wedding_date: action.data};
        return { ...state, registrationData: weddingDateState };

        case 'ADD_OCCUPATION':
            const occupationState = {
                ...state.registrationData,
                occupation: action.data};
        return { ...state, registrationData: occupationState };

        // case 'ADD_CAMPUS':
        //     const campusState = {
        //         ...state.registrationData,
        //         campus: action.data};
        // return { ...state, registrationData: campusState };

        case 'ADD_COUNTRY':
            const countryState = {
                ...state.registrationData,
                country: action.data};
        return { ...state, registrationData: countryState };

        case 'ADD_REG_DEPARTMENT':
            const regDepartmentState = {
                ...state.registrationData,
                reg_department: action.data};
        return { ...state, registrationData: regDepartmentState };

        case 'CLEAR_STATE':
            const clearedState = { 
                ...state, 
                stateData: initialState.stateData
            }
            return clearedState;

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
        isPresent: null,
        message_title: '',
        message_summary: '',
        post_service_prayer: ''
    },
    registrationData: {
        first_name: '',
        last_name: '',
        reg_email: '',
        phone_number: '',
        image_url: null,
        reg_gender: '',
        reg_birth_date: '',
        contact_address: '',
        marital_status: '',
        spouse_name: '',
        wedding_date: '',
        occupation: '',
        // campus: '',
        country: '',
        reg_department: '',
    },
    departments: JSON.parse(localStorage.getItem('departments')) || [],
    reports: [],
    registrations: [],
    user: null
};
