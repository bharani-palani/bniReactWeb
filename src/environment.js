// class environment{
//     base_url = () => {
//         const dev = "http://localhost/bniReactWeb/services/";
//         const prod = "http://bharani.tech/services/";
//         return process.env.NODE_ENV === "development" ? dev : prod;
//     }
// }

// export default environment;

export default function baseUrl() {
    const dev = "http://localhost/bniReactWeb/services";
    const prod = "http://bharani.tech/services";
    return process.env.NODE_ENV === "development" ? dev : prod;
};