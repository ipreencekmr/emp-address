import {
    ADDR_LINE_1,
    ADDR_LINE_2,
    APT_SUITE,
    SOCIETY,
    CITY, 
    STATE, 
    COUNTRY, 
    ZIP_CODE, 
    addressLine1Action, addressLine2Action, aptSuiteAction, 
    societyAction, cityAction, stateAction, 
    countryAction, zipCodeAction 
} from "../../src/actions/formAction";


describe("formAction", ()=>{
    it("should return addressLine1 action with type", ()=>{
        const action = addressLine1Action("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: ADDR_LINE_1,
            payload: "mockValue"
        }))
    });

    it("should return addressLine2 action with type", ()=>{
        const action = addressLine2Action("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: ADDR_LINE_2,
            payload: "mockValue"
        }))
    });

    it("should return aptSuite action with type", ()=>{
        const action = aptSuiteAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: APT_SUITE,
            payload: "mockValue"
        }))
    });

    it("should return society action with type", ()=>{
        const action = societyAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SOCIETY,
            payload: "mockValue"
        }))
    });

    it("should return city action with type", ()=>{
        const action = cityAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: CITY,
            payload: "mockValue"
        }))
    });

    it("should return state action with type", ()=>{
        const action = stateAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: STATE,
            payload: "mockValue"
        }))
    });

    it("should return country action with type", ()=>{
        const action = countryAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: COUNTRY,
            payload: "mockValue"
        }))
    });

    it("should return zipCode action with type", ()=>{
        const action = zipCodeAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: ZIP_CODE,
            payload: "mockValue"
        }))
    });
})