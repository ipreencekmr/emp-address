import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { Home } from "../../src/components/Home";

describe("Address App", () => {

    it("should render as expected", () => {
        render(<Home/>);
        expect(screen.getByTestId("addressFormId")).toBeInTheDocument();
    });

    it("should trigger form validation on submit button click", () => {
        render(<Home />);
        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);
        expect(screen.getByTestId("addressFormId").classList).toContain("was-validated");
    });

    it("should trigger form submission on submit button click", () => {
        render(<Home />);
        const form = screen.getByTestId("addressFormId");

        //mock form validity 
        form.checkValidity = jest.fn().mockReturnValueOnce(true);
        
        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);
        expect(form.classList).toContain("needs-validation");
    });
});