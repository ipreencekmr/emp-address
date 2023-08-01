import { formReducer } from "../../src/reducer/formReducer";
import { defaultValue } from "../../src/context/formContext";
import {
    addressLine1Action, addressLine2Action, aptSuiteAction, 
    societyAction, cityAction, stateAction, 
    countryAction, zipCodeAction 
} from "../../src/actions/formAction";

describe("formReducer", () => {
    it("should work for addressLine1 action", ()=>{
        const action = addressLine1Action("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.addressLine1).toEqual("mockValue");
    });

    it("should work for addressLine2 action", ()=>{
        const action = addressLine2Action("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.addressLine2).toEqual("mockValue");
    });

    it("should work for aptSuite action", ()=>{
        const action = aptSuiteAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.aptSuite).toEqual("mockValue");
    });

    it("should work for society action", ()=>{
        const action = societyAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.society).toEqual("mockValue");
    });

    it("should work for city action", ()=>{
        const action = cityAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.city).toEqual("mockValue");
    });

    it("should work for state action", ()=>{
        const action = stateAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.state).toEqual("mockValue");
    });

    it("should work for country action", ()=>{
        const action = countryAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.country).toEqual("mockValue");
    });

    it("should work for zipCode action", ()=>{
        const action = zipCodeAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.zipCode).toEqual("mockValue");
    });

    it("should throw an error for invalid action", ()=>{
        const action = {
            type: "INVALID_ACTION"
        };
        try {
            formReducer(defaultValue, action);
        } catch (error) {
            expect(error.name).toEqual("Error");
        }
    });
    
});