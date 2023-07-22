import { get } from "lodash-es";

export const userListParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        return response?.users.map(function (row, key) {
            return {
                id: get(row, "_id", ""),
                username: get(row, "username", ""),
                status: get(row, "status", ""),
                roles: get(row, "roles", ""),
                name: get(row, "name", ""),
                mobile: get(row, "mobile", ""),
                email: get(row, "email", ""),
            }
        });

    } catch (error) {
        throw new Error(error);
    }
}

export const UserParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        return response;

    } catch (error) {
        throw new Error(error);
    }
}