import React, {
    useReducer, useRef, useState 
} from "react";
import { formReducer } from "../reducer/formReducer";
import { FormContext, defaultValue } from "../context/formContext";
import { AddressLine } from "./AddressLine";
import { Locality } from "./Locality";
import { Region } from "./Region";

export const Home = () => {
    const [formState, formDispatch] = useReducer(formReducer, defaultValue);
    const [formValidationClass, setFormValidationClass] = useState("needs-validation");
    const formRef = useRef(null);
    
    const submitForm = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const form = formRef.current;
        const isFormValidated = form.checkValidity();

        if(!isFormValidated) {
            setFormValidationClass("was-validated");
            return;
        }
        console.log(`Submit Form => ${JSON.stringify(formState)}`);
    };
    
    return (
        <FormContext.Provider value={ formState }>
            <form 
                data-testid="addressFormId" 
                ref={ formRef } 
                className={ `p-2 ${formValidationClass}` }  noValidate> 
                <AddressLine formDispatch={ formDispatch }></AddressLine>
                <Locality formDispatch={ formDispatch }></Locality>
                <Region formDispatch={ formDispatch }></Region>
                <button type="submit" 
                    className="btn btn-outline-success"
                    onClick={ (e) => submitForm(e) }>Update</button>
            </form>
        </FormContext.Provider>
    )
};