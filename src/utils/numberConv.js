function ConvertEnNumberToPersian(number) {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
    "/": "/",
    "-": "-",
    ",": ",",
    ":": ":",
    "۰": "۰",
    "۱": "۱",
    "۲": "۲",
    "۳": "۳",
    "۴": "۴",
    "۵": "۵",
    "۶": "۶",
    "۷": "۷",
    "۸": "۸",
    "۹": "۹",
  };
  number = number ? number.toString().split("") : "";
  let persianNumber = "";
  for (let i = 0; i < number.length; i++) {
    number[i] = persian[number[i]];
  }
  for (let i = 0; i < number.length; i++) {
    persianNumber += number[i];
  }
  return persianNumber;
}
export default ConvertEnNumberToPersian;
