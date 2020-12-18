const helpers = {
    fluorescentColor: "#c2d82e",
    sageHeaderAndList: (response, sortKey) => {
        const list = response.filter((e) => Number(e[sortKey]) > 1);
        const heading = response.filter((e) => Number(e[sortKey]) === 1)[0];
        return [heading, list]
    },
    LoadRandomSpinnerIcon: () => {
        const icons = ["Audio","BallTriangle","Bars","Circles","Grid","Hearts","Oval","Puff","Rings","TailSpin","ThreeDots"]
        const rIndex = Math.floor(Math.random() * icons.length);
        return icons[rIndex - 1];
    },
    stringToCapitalize: (string) => {
        return string.split("_").map(s => s.substring(0,1).toUpperCase()+s.substring(1,s.length)).join(" ")
    }
}

export default helpers;