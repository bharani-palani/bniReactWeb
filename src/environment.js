const baseUrl = () => {
    const dev = "http://localhost/bni-react-web/services";
    const prod = "https://bharani.tech/services";
    return process.env.NODE_ENV === "development" ? dev : prod;
};

export default baseUrl;