import React from "react";

export const defaultValue = {
    addressLine1: "",
    addressLine2: "",
    aptSuite: "",
    society: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
};

export const FormContext = React.createContext(defaultValue);

export const useFormContext = () => React.useContext(FormContext);