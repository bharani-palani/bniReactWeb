const helpers = {
    sageHeaderAndList: (response, sortKey) => {
        const list = response.filter((e) => Number(e[sortKey]) > 1);
        const heading = response.filter((e) => Number(e[sortKey]) === 1)[0];
        return [heading, list]
    }
}

export default helpers;