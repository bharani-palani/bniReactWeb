const baseUrl = () => {
    // const dev = "http://localhost/bniReactWeb/services";
    const prod = "https://bharani.tech/services";
    return process.env.NODE_ENV === "development" ? prod : prod;
};

export default baseUrl;