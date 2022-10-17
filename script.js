let screen = document.querySelector("#screen");
let btns = Array.from(document.getElementsByClassName("buttons"));
let clear = document.getElementById("clear");
let back = document.getElementById("back");
let logscreen = document.getElementById("log");
let log = "";
let result = "";
btns.map((button) => {
  button.addEventListener("click", (e) => {
    let btn = e.target.innerHTML;

    if (btn == `=` && result != "") {
      let sum = eval(result);
      screen.textContent = Math.round(sum * 100000) / 100000;
      log += `<div> ${result} = ${Math.round(sum * 100000) / 100000} </div>`;
      logscreen.innerHTML = log;
      result = sum;
    } else if (btn == `AC`) {
      log = "";
      screen.textContent = "";
      result = "";
      logscreen.textContent = "";
    } else if (btn == `←`) {
      screen.textContent = screen.textContent.slice(0, -1);
      result = screen.textContent;
    } else if (btn == `=` && result == "") {
      console.log("-");
    } else {
      result += btn;
      screen.textContent += btn;
    }
  });
});
