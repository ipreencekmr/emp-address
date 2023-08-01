import React from "react"
import PropTypes from "prop-types";
import { useFormContext } from "../context/formContext";
import {
    stateAction, countryAction, zipCodeAction 
} from "../actions/formAction";

export const Region = ({ formDispatch }) => {

    const { state, country, zipCode } = useFormContext();

    const handleChange = (e) => {
        let action;
        const value = e.target.value;
        switch(e.target.id) {
            case "stateId":
                action = stateAction(value);
                break;
            case "countryId":
                action = countryAction(value);
                break;
            case "zipCodeId":
                action = zipCodeAction(value);
                break;
        }
        formDispatch(action);
    };

    return (
        <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="stateId">State</label>
                <input type="text" 
                    className="form-control" 
                    id="stateId" 
                    value={ state }
                    onChange={ handleChange }
                    aria-required={ true }
                    required/>
                <div className="invalid-feedback">
                        Please provide state
                </div>
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="countryId">Country</label>
                <input type="text" 
                    className="form-control" 
                    id="countryId" 
                    value={ country }
                    onChange={ handleChange }
                    aria-required={ true }
                    required />
                <div className="invalid-feedback">
                        Please provide Country
                </div>
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="zipCodeId">Zip</label>
                <input type="text" 
                    className="form-control" 
                    id="zipCodeId" 
                    value={ zipCode }
                    onChange={ handleChange }
                    aria-required={ true }
                    required/>
                <div className="invalid-feedback">
                        Zip code is required
                </div>
            </div>
        </div>
    )
};

Region.propTypes = {
    formDispatch: PropTypes.func.isRequired 
};