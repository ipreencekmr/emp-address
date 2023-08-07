import React from "react"
import PropTypes from "prop-types";
import { useFormContext } from "emp_employee/context";
import { addressLine1Action, addressLine2Action } from "emp_employee/actions";

export const AddressLine = ({ formDispatch }) => {

    const { address: { addressLine1, addressLine2 } } = useFormContext();

    const handleChange = (e) => {
        let action;
        const value = e.target.value;
        switch(e.target.id) {
            case "addrLine1Id":
                action = addressLine1Action(value);
                break;
            case "addrLine2Id":
                action = addressLine2Action(value);
                break;
        }
        formDispatch(action);
    };

    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="addrLine1Id">Address Line 1</label>
                <input type="text" 
                    className="form-control" 
                    id="addrLine1Id" 
                    data-testid="addrLine1Id"
                    value={ addressLine1 }
                    onChange={ handleChange }
                    placeholder="Ex: Block 9, Sector 36A" 
                    aria-required={ true }
                    required/>
                <div className="invalid-feedback">
                    Address line 1 is required.
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="addrLine2Id">Address Line 2</label>
                <input type="text" 
                    className="form-control" 
                    id="addrLine2Id" 
                    data-testid="addrLine2Id"
                    value={ addressLine2 }
                    onChange={ handleChange }
                    placeholder="Ex: Near Peripheral Road" />
            </div>
        </React.Fragment>
    )
};

AddressLine.propTypes = {
    formDispatch: PropTypes.func.isRequired 
};