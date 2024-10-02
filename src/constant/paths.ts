type PathType = {
    [key: string]: string;
};

const instance: PathType = {
    // default path
    default: "/",
    home: "/home",

    // auth path
    login: "/login",
    register: "/register",

    // protected path
    profile: "/profile"
};

export default instance;
