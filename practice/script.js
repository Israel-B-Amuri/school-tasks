let userInput = document.querySelector("#textarea");
const counter = document.querySelector("#total");

userInput.addEventListener("keyup", function () {
  let value = userInput.value;
  // remove empty spaces at the begining and the end of the input.
  value = value.replace(/(^\s*)|(\s$)/gi, "");
  //replace double spaces with a single space
  value = value.replace(/[]{2,}/gi, " ");
  // remove empty spaces at the beginning of new lines
  value = value.replace(/\n /, "\n");
  numberOfWords = value.split(" ");
  if (numberOfWords[0] === "") {
    counter.innerHTML = 0;
  } else {
    counter.innerHTML = numberOfWords.length;
  }
});
