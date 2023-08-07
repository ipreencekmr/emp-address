import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { Home } from "../../src/components/Home";


jest.mock("emp_employee/context", () => ({
    useFormContext: jest.fn().mockReturnValue({
        address: {
            addressLine1: "mockLine1",
            addressLine2: "mockLine2",
            aptSuite: "mockSuite",
            society: "mockSociety",
            city: "mockCity",
            state: "mockState",
            country: "mockCountry",
            zipCode: "mockZip" 
        } 
    })
}), {
    virtual: true 
});

jest.mock("emp_employee/actions", () => ({
    addressLine1Action: jest.fn(),
    addressLine2Action: jest.fn(),
    aptSuiteAction: jest.fn(),
    societyAction: jest.fn(),
    cityAction: jest.fn(),
    stateAction: jest.fn(),
    countryAction: jest.fn(),
    zipCodeAction: jest.fn() 
}), {
    virtual: true 
});

describe("Address App", () => {

    it("should render as expected", () => {
        const formDispatch = jest.fn();
        render(<Home formDispatch={ formDispatch }/>);
        expect(screen.getAllByRole("textbox")).toHaveLength(8);
    });

    it("should have address line fields", () => {
        const formDispatch = jest.fn();
        render(<Home formDispatch={ formDispatch }/>);
        expect(screen.getByTestId("addrLine1Id")).toBeInTheDocument();
        expect(screen.getByTestId("addrLine2Id")).toBeInTheDocument();
    });

    it("should have locality fields", () => {
        const formDispatch = jest.fn();
        render(<Home formDispatch={ formDispatch }/>);
        expect(screen.getByTestId("aptSuiteId")).toBeInTheDocument();
        expect(screen.getByTestId("societyId")).toBeInTheDocument();
        expect(screen.getByTestId("cityId")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("aptSuiteId"), {
            target: {
                value: "mockApt"
            }
        });
        expect(formDispatch).toHaveBeenCalledTimes(1);

        fireEvent.change(screen.getByTestId("societyId"), {
            target: {
                value: "mockSociety"
            }
        });
        expect(formDispatch).toHaveBeenCalledTimes(1);

        fireEvent.change(screen.getByTestId("cityId"), {
            target: {
                value: "mockCity"
            }
        });
        expect(formDispatch).toHaveBeenCalledTimes(1);
    });
});