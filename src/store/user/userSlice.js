import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showDrawer: false,
    formType: "",
    initialValues: {
        name: "",
        email: "",
        mobile: "",
        roles: [],
        status: ""
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUserInitialState: (state, action) => {
            const { showDrawer, formType, initialValues } = action.payload;

            state.showDrawer = showDrawer;
            if (formType)
                state.formType = formType;
            if (initialValues)
                state.initialValues = initialValues;
        }
    },
});

// Action creators are generated for each case reducer function
export const { changeUserInitialState } = userSlice.actions;

export default userSlice;
