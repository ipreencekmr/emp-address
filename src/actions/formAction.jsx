export const ADDR_LINE_1 = "ADDR_LINE_1";
export const ADDR_LINE_2 = "ADDR_LINE_2";
export const APT_SUITE = "APT_SUITE";
export const SOCIETY = "SOCIETY";
export const CITY = "CITY";
export const STATE = "STATE";
export const COUNTRY = "COUNTRY";
export const ZIP_CODE = "ZIP_CODE";

export const addressLine1Action = (value) => {
    return {
        type: ADDR_LINE_1,
        payload: value
    }
};

export const addressLine2Action = (value) => {
    return {
        type: ADDR_LINE_2,
        payload: value
    }
};

export const aptSuiteAction = (value) => {
    return {
        type: APT_SUITE,
        payload: value
    }
};

export const societyAction = (value) => {
    return {
        type: SOCIETY,
        payload: value
    }
};

export const cityAction = (value) => {
    return {
        type: CITY,
        payload: value
    }
};

export const stateAction = (value) => {
    return {
        type: STATE,
        payload: value
    }
};

export const countryAction = (value) => {
    return {
        type: COUNTRY,
        payload: value
    }
};

export const zipCodeAction = (value) => {
    return {
        type: ZIP_CODE,
        payload: value
    }
};