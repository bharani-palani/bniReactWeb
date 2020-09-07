const baseUrl = () => {
    const dev = "http://localhost/bni-react-web/services";
    const prod = "https://bharani.tech/services";
    return process.env.NODE_ENV === "development" ? prod : prod;
};

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.By2r2BwheJsbrEGrHOaMQwrrmlY7wHVFzWtuEmv39fM";
const oAuthToken = "279333255392-9hd53g9v23qvt969au448ba9b2mb7fkp.apps.googleusercontent.com";
export {baseUrl, token, oAuthToken};