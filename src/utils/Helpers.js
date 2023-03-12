import formatNaira from "./currency";
const nairaSymbol = "\u{020A6}";

export const reactSelectStyleTable = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? "0.1rem solid #CCCCCC" : "0.1rem solid #CCCCCC",
    // backgroundColor: state.isSelected ? "#CCCCCC" : "white",
    boxShadow: state.isFocused
      ? "0.1rem solid #CCCCCC"
      : "0.1rem solid #CCCCCC",
    "&:hover": {
      // border: state.isFocused ? 0 : 0
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#DE430A" : "white",
  }),
};

export const formatNumWithCommaNaira = (numb) => {
  const nairaSymbol = "\u{020A6}";

  var regex = /[,\sNG]/g;
  var result = numb.replace(regex, "");
  var num = Math.abs(result);
  num = num.toFixed(2);
  const numSplit = num.split(".");
  var int = numSplit[0];
  const dec = numSplit[1];
  if (int.length > 3) {
    int = int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (numb) {
    return `${nairaSymbol}` + int + "." + dec;
  }

  return `${nairaSymbol}` + "0" + "." + "00";
};

export const formatNumWithoutCommaNaira = (numb) => {
  // const nairaSymbol = "\u{020A6}";

  var regex = /[,\sNG]/g;
  var result = String(numb).replace(regex, "");
  return result;
};

export function commarize(num) {
  const x = Number(num).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let formattedNumber = x.slice(1);

  return formattedNumber;
}

export function formatDate(date) {
  var actualDate = String(date);
  const splitDate = actualDate.split(",");
  var newDate =
    splitDate[0].slice(0, 3) + "." + splitDate[1] + "," + splitDate[2];
  return newDate;
}

export function formatDateWithSlash(date) {
  var actualDate = String(date);
  const splitDate = actualDate.split("/");
  var newDate =
    splitDate[0].slice(0, 3) + "." + splitDate[1] + "," + splitDate[2];
  return newDate;
}

export function DiffinDate(date1, date2) {
  // JavaScript program to illustrate
  // calculation of no. of days between two date

  // To set two dates to two variables
  var a = new Date(date1);
  var b = new Date(date2);

  // To calculate the time difference of two dates
  var Difference_In_Time = b.getTime() - a.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var Difference_In_Months = Difference_In_Days / (2e3 * 3600 * 365.25);

  //To display the final no. of days (result)
  if (Difference_In_Days <= 30) {
    return Math.round(Difference_In_Days) + " " + "days";
  }
  if (Difference_In_Days >= 31) {
    return Math.round(Difference_In_Months) + " " + "months";
  }
}

export const formatNumWithComma = (numb) => {
  const nairaSymbol = "\u{020A6}";

  var regex = /[,\sNG]/g;
  var result = String(numb).replace(regex, "");
  var num = Math.abs(result);
  num = num.toFixed(2);
  const numSplit = num.split(".");
  var int = numSplit[0];
  const dec = numSplit[1];
  if (int.length > 3) {
    int = int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (int === "NaN") {
    return 0;
  } else return int;
};

export const formatStringToAvatar = (param) => {
  const splitVal = param.split(" ");
  const avartarOne = splitVal[0]?.charAt(0);
  const avatarTwo = splitVal[1]?.charAt(0);
  return `${avartarOne} ${avatarTwo}`;
};

export function generateRandomColor() {
  let maxVal = 0x0bb2d; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

export const formatName = (name) => {
  const nameSplit = name.split(" ");
  // console.log( `${nameSplit[0].charAt(0)} ${nameSplit[1].charAt(0)}`);
  return `${nameSplit[0].charAt(0)} ${nameSplit[1].charAt(0)}`;
};

export const handleNumberFormatInput = (e) => {
  const value = e.target.value;
  const clean = value.replace(/,/g, "");
  const regex = /^[0-9]\.?[0-9]$/;

  if (value && clean.match(regex)) {
    if (!value.includes(".")) {
      const formatted = new Intl.NumberFormat().format(parseFloat(clean));
      return formatted;
    } else {
      return value;
    }
  } else {
    return;
  }
};

export const customErrorId = "custom-error-toast-id";
export const customSuccessId = "custom-success-toast-id";
export const customInfoId = "custom-info-toast-id";
