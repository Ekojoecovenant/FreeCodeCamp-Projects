function palindrome(str) {
  let alphaArr = str.match(/[a-zA-Z0-9]/g);
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

// Designed by Ekojoe Covenant Lemom AKA AlphaCode☯️
