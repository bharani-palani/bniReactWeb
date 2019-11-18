const helpers = {
    sageHeaderAndList: (response, sortKey) => {
        const list = response.filter((e) => Number(e[sortKey]) > 1);
        const heading = response.filter((e) => Number(e[sortKey]) === 1)[0];
        return [heading, list]
    },
    LoadRandomSpinnerIcon: () => {
        const icons = ["Audio","BallTriangle","Bars","Circles","Grid","Hearts","Oval","Puff","Rings","TailSpin","ThreeDots"]
        const rIndex = Math.floor(Math.random() * icons.length);
        return icons[rIndex - 1];
    }
}

export default helpers;