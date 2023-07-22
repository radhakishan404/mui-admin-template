import * as yup from "yup";

export const UserValidation = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().required("Required"),
    mobile: yup.string().required("Required"),
    status: yup.string().required("Required"),
    roles: yup.array().required("Required"),
});