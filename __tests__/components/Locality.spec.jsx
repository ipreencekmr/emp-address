import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";

import { Locality } from "../../src/components/Locality";

describe("Locality", () => {
    it("should render as expected", () => {
        render(<Locality formDispatch={ jest.fn() }/>);
        expect(screen.getAllByRole("textbox")).toHaveLength(3);
    });

    it("should call formDispatch method on input change", () => {
        const formDispatch = jest.fn();
        render(<Locality formDispatch={ formDispatch }></Locality>);
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