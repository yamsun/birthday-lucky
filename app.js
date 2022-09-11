const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelectorAll("button")[0];
const messageEl = document.querySelector("#message");
const sum = document.querySelector("#sum");

var noticeBox = document.querySelector("#notice");
var xBtn = document.querySelector("#x-btn");

xBtn.addEventListener("click", () => {
  noticeBox.style.display = "none";
});

const printMessage = (text) => {
  messageEl.style.display = "block";
  messageEl.innerHTML = text;
};

const checkClickHandler = () => {
  console.log(dob.value);
  console.log(luckyNum.value);
  if (dob.value && luckyNum.value) {
    let dobSum = dob.value
      .split("-")
      .join("")
      .split("")
      .reduce((a, b) => Number(a) + Number(b));
    console.log(dobSum);
    console.log(parseInt(dobSum) % parseInt(luckyNum.value) == 0);
    if (parseInt(dobSum) % parseInt(luckyNum.value) == 0) {
      printMessage(`${luckyNum.value} is a lucky number!! 🤩`);
    } else {
      printMessage(`${luckyNum.value} is not that lucky  😕`);
    }
  } else {
    printMessage(`Please enter both the fields 😇`);
  }
};

checkBtn.addEventListener("click", checkClickHandler);
