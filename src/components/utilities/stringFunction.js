/* eslint-disable no-template-curly-in-string */
const getRandomNumber =
  "getRandomNumber = () => { \r\n" +
  "\tconst [start, end] = [Number(this.start.current.value), Number(this.end.current.value)]\r\n" +
  "\tconst randomNumber = Math.floor(Math.random() * (end-start+1)) + start;\r\n" +
  "\tthis.setState({randomNumber});\r\n" +
  "}";

const getUUID =
  "getUUID = () => { \r\n" +
  "\tconst uuidv1 = require('uuid/v1');\r\n" +
  "\tthis.setState({randomNumber: uuidv1()});\r\n" +
  "}";

const onDateConvert =
  "onDateConvert = () => {\r\n" +
  "\t    let selectedDate = document.getElementsByName('selectedDate')[0].value;\r\n" +
  "\t    selectedDate = new Date(selectedDate);\r\n" +
  "\t    const selectedDateformat = `${selectedDate.getFullYear()}/${selectedDate.getMonth() +\r\n" +
  "\t      1}/${selectedDate.getDate()} ${selectedDate.getHours()}:${\r\n" +
  "\t      selectedDate.getMinutes() < 10\r\n" +
  "\t        ? '0' + selectedDate.getMinutes()\r\n" +
  "\t        : selectedDate.getMinutes()\r\n" +
  "\t    }`;\r\n" +
  "\t\r\n" +
  "\t    const hh = Number(this.hh.current.value);\r\n" +
  "\t    const mm = Number(this.mm.current.value);\r\n" +
  "\t    let newDate = this.state.isInc\r\n" +
  "\t      ? selectedDate.setMinutes(selectedDate.getMinutes() + mm)\r\n" +
  "\t      : selectedDate.setMinutes(selectedDate.getMinutes() - mm);\r\n" +
  "\t    const nd = this.state.isInc\r\n" +
  "\t      ? selectedDate.setHours(selectedDate.getHours() + hh)\r\n" +
  "\t      : selectedDate.setHours(selectedDate.getHours() - hh);\r\n" +
  "\t\r\n" +
  "\t    newDate = `${new Date(nd)}\r`;\r\n" +
  "\t    newDate = `Selected Time = ${selectedDateformat}\r`;\r\n" +
  "\t    newDate += `${this.state.isInc ? 'Increment' : 'Decrement'} (hrs) = ${\r\n" +
  "\t      hh < 10 ? '0' + hh : hh\r\n" +
  "\t    }:${mm < 10 ? '0' + mm : mm}\r`;\r\n" +
  "\t    const resultDateformat = `${selectedDate.getFullYear()}/${selectedDate.getMonth() +\r\n" +
  "\t      1}/${selectedDate.getDate()} ${\r\n" +
  "\t      selectedDate.getHours() < 10\r\n" +
  "\t        ? '0' + selectedDate.getHours()\r\n" +
  "\t        : selectedDate.getHours()\r\n" +
  "\t    }:${\r\n" +
  "\t      selectedDate.getMinutes() < 10\r\n" +
  "\t        ? '0' + selectedDate.getMinutes()\r\n" +
  "\t        : selectedDate.getMinutes()\r\n" +
  "\t    }`;\r\n" +
  "\t    newDate += `${\r\n" +
  "\t      this.state.isInc ? 'Increment' : 'Decrement'\r\n" +
  "\t    } Time = ${resultDateformat} `;\r\n" +
  "\t    this.setState({ newDate });\r\n" +
  "};";

const onArrayDiff =

"convert = () => {\r\n" +
"\t   let { arr1, arr2 } = this.state;\r\n" +
"\t   arr1 = arr1.split(',').map(a => String(a));\r\n" +
"\t   arr2 = arr2.split(','').map(a => String(a));\r\n" +
"\t\r\n" +
"\t   const a1 = arr1.filter(a => !arr2.includes(a));\r\n" +
"\t   const a2 = arr2.filter(a => !arr1.includes(a));\r\n" +
"\t   const output = [...a1, ...a2];\r\n" +
"\t   this.setState({ output });\r\n" +
"};";

const onDestruct =   
"const onDestructure = () => {\r\n" +
  "\tarrayOfObjects = arrayOfObjects.map(\r\n" +
  "\t({ name, ...balance }) => ({[propertyName]: name,...balance}));\r\n"+
"}";

const someEveryCode = 
"const output = [array.every(a => a === string), array.some(a => a === string)];\r\n"+
"return output";

const someEveryAdvanced = 
"const conditions = [];\r\n"+
"conditions.push(item => criteria.indexOf(array) > -1);\r\n"+
"const output = mainArray.filter(o => conditions.every(c => c(o)));"

export { getRandomNumber, getUUID, onDateConvert, onArrayDiff, onDestruct, someEveryCode, someEveryAdvanced };
