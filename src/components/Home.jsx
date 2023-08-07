import React from "react";
import PropTypes from "prop-types";
import { AddressLine } from "./AddressLine";
import { Locality } from "./Locality";
import { Region } from "./Region";

export const Home = ({ formDispatch }) => {
    return (
        <React.Fragment>
            <AddressLine formDispatch={ formDispatch }></AddressLine>
            <Locality formDispatch={ formDispatch }></Locality>
            <Region formDispatch={ formDispatch }></Region>
        </React.Fragment>
    )
};

Home.propTypes = {
    formDispatch: PropTypes.func.isRequired 
};