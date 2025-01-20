function start() {
  let enteredText = document.getElementById("text-input").value;
  let output = document.getElementById("result");

  if (enteredText === "") {
    output.style.display = "block";
    error(output);
    output.innerText = "Please Input a Value";
  } else {
    let checked = palindrome(enteredText);
    output.style.display = "block";

    if (checked == true) {
      output.innerText = isP(output, enteredText);
    } else {
      output.innerText = isNotP(output, enteredText);
    }
  }
}

function palindrome(str) {
  let alphaArr = str.match(/[a-zA-Z0-9]/g);
  if (alphaArr === null) {
    return true;
  }
  return loop(alphaArr);
}

function loop(alphaArr) {
  if (alphaArr.length <= 1) {
    return true;
  } else {
    let popped = alphaArr.pop();
    let shifted = alphaArr.shift();
    if (isLowerCase(popped) === isLowerCase(shifted)) {
      return loop(alphaArr);
    } else {
      return false;
    }
  }
}

function isLowerCase(string) {
  if (typeof string === "number") {
    return string;
  } else if (string === string.toLowerCase()) {
    return string;
  } else {
    return string.toLowerCase();
  }
}

// ERROR STYLE HANDLING

function isP(value, checked) {
  value.style.color = "white";
  value.style.background = "hsl(219, 70%, 8%)";
  //   value.style.background = "unset";
  return `${checked} is a palindrome`;
}

function isNotP(value, checked) {
  value.style.color = "white";
  //   value.style.background = "unset";
  value.style.background = "hsl(219, 70%, 8%)";
  return `${checked} is not a palindrome`;
}

function error(value) {
  value.style.color = "red";
  value.style.background = "pink";
}

// Designed by Ekojoe Covenant Lemom AKA AlphaCode☯️
