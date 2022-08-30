const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelectorAll("button")[0];
const messageEl = document.querySelector("#message");

const printMessage = (text) => {
  messageEl.innerHTML = text;
};

const checkClickHandler = () => {
  console.log(dob.value);
  console.log(luckyNum.value);
  let dobSum = dob.value.split("-").reduce((a, b) => Number(a) + Number(b));
  console.log(dobSum);
  console.log(parseInt(dobSum) % parseInt(luckyNum.value) == 0);
  if (parseInt(dobSum) % parseInt(luckyNum.value) == 0) {
    printMessage(`${luckyNum.value} is a lucky number!! 🤩`);
  } else {
    printMessage(`${luckyNum.value} is not that lucky  😕`);
  }
};

checkBtn.addEventListener("click", checkClickHandler);
