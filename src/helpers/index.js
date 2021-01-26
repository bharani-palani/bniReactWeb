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
    // const rIndex = Math.floor(Math.random() * icons.length) + 1;
    const icon = icons[6];
    return icon;
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
  ],
  indianLacSeperator: value => {
    return value.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      style: "currency",
      currency: "INR"
    });
  },
  strToNumMonth: {
    // usage: strToNumMonth["Mar"] | output: "03"
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  },
  monthToStr: {
    // usage: monthToStr["03"] | output: Mar
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
  },
  fullmonthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  threeDigitMonthNames: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  leadingZeros: number => {
    let num = Number(number);
    return num < 10 ? `0${num}` : num;
  },
  dateToMonthYear: date => {
    // usage: 2020-03-18 | Output: Mar-2020
    const myDate = new Date(date);
    return `${
      helpers.threeDigitMonthNames[myDate.getMonth()]
    }-${myDate.getFullYear()}`;
  },
  addMonths: (date, count) => {
    if (date && count) {
      let [m, d] = ["", (date = new Date(+date)).getDate()];
      date.setMonth(date.getMonth() + count, 1);
      m = date.getMonth();
      date.setDate(d);
      if (date.getMonth() !== m) date.setDate(0);
    }
    return date;
  }

};

export default helpers;
