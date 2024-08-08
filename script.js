let darkmode = localStorage.getItem("darkmode");
let themeSwitch = document.getElementById("theme-switch");
let dataDisplay = document.getElementById("data-display");
let buttons = document.querySelectorAll(".btn");

//* making that when user press Enter so focus go on Input field functionality:
buttons.forEach((element) => {
  element.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dataDisplay.focus();
      if (dataDisplay.value.trim() !== "") {
        if (event.key === "Enter") {
          dataDisplay.value = eval(dataDisplay.value);
        }
      }
    }
  });
});

//* make display functionality:
function displayValue(value) {
  dataDisplay.value += value;
}

//* make clear all the value functionality:
function clearAll() {
  dataDisplay.value = "";
}

//* make delete the value functionality:
function deleteValue() {
  dataDisplay.value = dataDisplay.value.toString().slice(0, -1);
}

//* make calculate the value functionality:
function calculate() {
  try {
    if (dataDisplay.value.trim() === "") {
      dataDisplay.value = "";
      return;
    } else if (dataDisplay.value.trim() !== "") {
      dataDisplay.value = eval(dataDisplay.value);
    }
  } catch (e) {
    dataDisplay.value = "ERROR";
  }
}

//* darkmode enable functionality:
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

//* darkmode disable functionality:
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

// * make condition to active darkmode:
if (darkmode === "active") {
  enableDarkMode();
}

//* click to darkmode or lightmode functionality:
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode != "active") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

