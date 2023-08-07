import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";

jest.mock("emp_employee/context", () => ({
    useFormContext: jest.fn().mockReturnValue({
        address: {
            state: "mockState",
            country: "mockCountry",
            zipCode: "mockZip" 
        } 
    })
}));

import { Region } from "../../src/components/Region";

describe("Region", () => {
    it("should render as expected", () => {
        render(<Region formDispatch={ jest.fn() }/>);
        expect(screen.getAllByRole("textbox")).toHaveLength(3);
    });

    it("should call formDispatch method on input change", () => {
        const formDispatch = jest.fn();
        render(<Region formDispatch={ formDispatch }></Region>);
        const inputFields = screen.getAllByRole("textbox");

        inputFields.forEach((inputElement) => {
            fireEvent.change(inputElement, {
                target: {
                    value: "mockValue"
                }
            });
        });
        expect(formDispatch).toHaveBeenCalledTimes(3);
    });
});