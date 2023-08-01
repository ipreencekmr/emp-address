import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { AddressLine } from "../../src/components/AddressLine";

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