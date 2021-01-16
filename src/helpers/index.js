const helpers = {
  fluorescentColor: "#c2d82e",
  sageHeaderAndList: (response, sortKey) => {
    const list = response.filter(e => Number(e[sortKey]) > 1);
    const heading = response.filter(e => Number(e[sortKey]) === 1)[0];
    return [heading, list];
  },
  LoadRandomSpinnerIcon: () => {
    const icons = [
      "Audio",
      "BallTriangle",
      "Bars",
      "Circles",
      "Grid",
      "Hearts",
      "Oval",
      "Puff",
      "Rings",
      "TailSpin",
      "ThreeDots"
    ];
    const rIndex = Math.floor(Math.random() * icons.length);
    return icons[rIndex - 1];
  },
  stringToCapitalize: string => {
    return string
      .split("_")
      .map(s => s.substring(0, 1).toUpperCase() + s.substring(1, s.length))
      .join(" ");
  },
  donutChartColors: [
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
    "#f44336"
  ]
};

export default helpers;
