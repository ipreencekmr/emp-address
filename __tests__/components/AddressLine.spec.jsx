import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { AddressLine } from "../../src/components/AddressLine";


jest.mock("emp_employee/context", () => ({
    useFormContext: jest.fn().mockReturnValue({
        address: {
            addressLine1: "mockLine1",
            addressLine2: "mockLine2",
        } 
    })
}), {
    virtual: true 
});

jest.mock("emp_employee/actions", () => ({
    addressLine1Action: jest.fn(),
    addressLine2Action: jest.fn(),
}), {
    virtual: true 
});

describe("Address Line", () => {

    it("should render as expected", () => {
        render(<AddressLine formDispatch={ jest.fn() }/>);
        expect(screen.getAllByRole("textbox")).toHaveLength(2);
    });

    it("should trigger form dispatch on change", () => {
        const formDispatch = jest.fn();
        render(<AddressLine formDispatch={ formDispatch } />);
        const textBoxes = screen.getAllByRole("textbox");

        textBoxes.forEach((textboxElement) => {
            fireEvent.change(textboxElement, {
                target: {
                    value: "mockValue"
                }
            });
        });

        expect(formDispatch).toHaveBeenCalledTimes(2);
    });
});