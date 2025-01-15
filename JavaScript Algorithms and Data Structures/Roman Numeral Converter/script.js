function start(main) {
  let enteredNum = document.getElementById("number").value;
  let output = document.getElementById("output");

  if (enteredNum === "") {
    error(output);
    output.innerText = "Please Enter a Valid number";
  } else {
    let converted = convertToRoman(enteredNum);
    output.style.display = "block";

    if (converted === "CTR3999") {
      error(output);
      output.innerText = "Error: Input a number less than or equal to 3999";
    } else if (converted === "CTR1") {
      error(output);
      output.innerText = "Error: Input a number greather than or equal to 1";
    } else {
      noError(output);
      output.innerText = `${converted}`;
    }
  }
}
function convertToRoman(num) {
  if (num >= 1 && num <= 3999) {
    let romanNum = "";
    const numAsString = num.toString();
    const romanArr = numAsString.split("");

    while (romanArr.length !== 0) {
      let shifted = romanArr.shift();
      let returned = convertingIndividually(Number(shifted), romanArr.length);
      romanNum += returned;
    }

    return romanNum;
  } else if (num < 1) {
    return "CTR1";
  } else {
    return "CTR3999";
  }
}

function convertingIndividually(num, length) {
  if (length === 3) {
    let str = "M";
    return str.repeat(num);
  } else if (length === 2) {
    if (num >= 1 && num <= 3) {
      let str = "C";
      return str.repeat(num);
    } else if (num == 4) {
      return "CD";
    } else if (num >= 5 && num <= 8) {
      let str = "C";
      return "D" + str.repeat(num - 5);
    } else if (num == 9) {
      return "CM";
    } else {
      return "";
    }
  } else if (length === 1) {
    if (num >= 1 && num <= 3) {
      let str = "X";
      return str.repeat(num);
    } else if (num == 4) {
      return "XL";
    } else if (num >= 5 && num <= 8) {
      let str = "X";
      return "L" + str.repeat(num - 5);
    } else if (num == 9) {
      return "XC";
    } else {
      return "";
    }
  } else if (length === 0) {
    if (num >= 1 && num <= 3) {
      let str = "I";
      return str.repeat(num);
    } else if (num == 4) {
      return "IV";
    } else if (num >= 5 && num <= 8) {
      let str = "I";
      return "V" + str.repeat(num - 5);
    } else if (num == 9) {
      return "IX";
    } else {
      return "";
    }
  }
  return "Error";
}

// ERROR STYLE HANDLING

function noError(value) {
  value.style.border = "2px solid white";
  value.style.color = "white";
  value.style.background = "unset";
}

function error(value) {
  value.style.border = "2px solid red";
  value.style.color = "red";
  value.style.background = "pink";
}
