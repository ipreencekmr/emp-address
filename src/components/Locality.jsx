import React from "react"
import PropTypes from "prop-types";
import { useFormContext } from "emp_employee/context";
import {
    aptSuiteAction, societyAction, cityAction 
} from "emp_employee/actions";

export const Locality = ({ formDispatch }) => {

    const { address: { aptSuite, society, city } } = useFormContext();

    const handleChange = (e) => {
        let action;
        const value = e.target.value;
        switch(e.target.id) {
            case "aptSuiteId":
                action = aptSuiteAction(value);
                break;
            case "societyId":
                action = societyAction(value);
                break;
            case "cityId":
                action = cityAction(value);
                break;
        }
        formDispatch(action);
    };

    return (
        <div className="form-row">
            <div className="form-group col-md-3">
                <label htmlFor="aptSuiteId">Apt Suite</label>
                <input type="text" 
                    className="form-control" 
                    id="aptSuiteId" 
                    data-testid="aptSuiteId"
                    value={ aptSuite }
                    onChange={ handleChange }
                    aria-required={ true }
                    required />
                <div className="invalid-feedback">
                    Please provide Apt Suite of your premise
                </div>
            </div>
            <div className="form-group col-md-5">
                <label htmlFor="societyId">Society</label>
                <input type="text" 
                    className="form-control" 
                    id="societyId"
                    data-testid="societyId"
                    value={ society }
                    onChange={ handleChange }
                    placeholder="Ex: AVL36" 
                    aria-required={ true }
                    required />
                <div className="invalid-feedback">
                    Please provide society you live in
                </div>
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="cityId">City</label>
                <input type="text" 
                    className="form-control" 
                    id="cityId" 
                    data-testid="cityId"
                    value={ city }
                    onChange={ handleChange }
                    aria-required={ true }
                    required />
                <div className="invalid-feedback">
                        Please provide city
                </div>
            </div>
        </div>
    )
};

Locality.propTypes = {
    formDispatch: PropTypes.func.isRequired 
};