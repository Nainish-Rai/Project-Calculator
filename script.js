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
      screen.textContent = sum;
      log += `<div> ${result} = ${sum} </div>`;
      console.log(log);
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
    } else {
      result += btn;
      screen.textContent += btn;
    }
  });
});
