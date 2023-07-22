import cookie from "js-cookie";

// Set in Cookie
export const setCookie = (key, value) => {
    if (window !== "undefiend") {
        cookie.set(key, value, {
            // 1 Day
            expires: 1,
        });
    }
};
// remove from cookie
export const removeCookie = (key) => {
    if (window !== "undefined") {
        cookie.remove(key, {
            expires: 1,
        });
    }
};

// Get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key) => {
    if (window !== "undefined") {
        return cookie.get(key);
    }
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
    if (window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Remove from localstorage
export const removeLocalStorage = (key) => {
    if (window !== "undefined") {
        localStorage.removeItem(key);
    }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    if (response.token) {
        const AuthToken = checkAuthToken(response.token);
        if (AuthToken.roles && Array.isArray(AuthToken.roles) && AuthToken.roles.length) {
            setCookie("token", response.token);
            next(true);
        } else {
            next(false);
        }
    }
};

export const updateLocalStorage = (data, next) => {
    const user_data = isAuth();
    setLocalStorage("user", { ...user_data, ...data });
    next();
};

// Access user info from localstorage
export const isAuth = () => {
    if (window !== "undefined") {
        const cookieChecked = getCookie("token");
        if (cookieChecked) {
            return JSON.parse(atob(cookieChecked.split(".")[1]))
        } else {
            return false;
        }
    }
};

export const checkAuthToken = (token) => {
    if (token) {
        return JSON.parse(atob(token.split(".")[1]))
    } else {
        return false;
    }
}

export const signout = async (next) => {
    removeCookie("token");
    removeLocalStorage("user");
    next();
};