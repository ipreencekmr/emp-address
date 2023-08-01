import {
    ADDR_LINE_1, ADDR_LINE_2, APT_SUITE, 
    SOCIETY, CITY, STATE, COUNTRY, ZIP_CODE 
} from "../actions/formAction";

export const formReducer = (state, action) => {
    switch(action.type) {
        case ADDR_LINE_1:{
            return {
                ...state,
                addressLine1: action.payload 
            }
        }
        case ADDR_LINE_2:{
            return {
                ...state,
                addressLine2: action.payload 
            }
        }
        case APT_SUITE:{
            return {
                ...state,
                aptSuite: action.payload 
            }
        }    
        case SOCIETY:{
            return {
                ...state,
                society: action.payload 
            }
        }
        case CITY:{
            return {
                ...state,
                city: action.payload 
            }
        }
        case STATE:{
            return {
                ...state,
                state: action.payload 
            }
        }
        case COUNTRY:{
            return {
                ...state,
                country: action.payload 
            }
        }
        case ZIP_CODE:{
            return {
                ...state,
                zipCode: action.payload 
            }
        }
        default:{
            throw Error("Unknown action.");
        }
    }
}