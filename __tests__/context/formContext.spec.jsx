import { useFormContext } from "../../src/context/formContext";

jest.mock("react", ()=> ({
    ...jest.requireActual("react"),
    useContext: jest.fn(()=>({
        addressLine1: "mockValue"
    }))
}));

describe("useFormContext", () => {
    it("should export default value object", ()=>{
        const { defaultValue } = require("../../src/context/formContext");
        expect(defaultValue).toEqual(expect.objectContaining({
            addressLine1: "",
            addressLine2: "",
            aptSuite: "",
            society: "",
            city: "",
            state: "",
            country: "",
            zipCode: "",
        }));
    });

    it("should return respective value from useFormContext", () =>{
        const { addressLine1 } = useFormContext();
        expect(addressLine1).toBe("mockValue");
    });
});