// messages bells

const bellIconBtn = document.querySelector(".bell-icon-img");
const bellMessage = document.querySelector(".popup-container");
const closeBellMessage = document.querySelector(".close-bell-message");
const ul = document.querySelectorAll(".popup")[0];
const li = document.querySelector(".popup li");
const circle = document.querySelector("circle");

bellIconBtn.addEventListener("click", function (e) {
  bellMessage.style.display = "block";
  circle.style.display = "none";
});

ul.addEventListener("click", e => {
  if (e.target.tagName === "SPAN") {
    const liClose = e.target.parentNode;
    const ulClose = liClose.parentNode;

    ulClose.removeChild(liClose);
  }
});
// messages bells end's

//alert window
const alertWindow = document.querySelector(".alert-window");
alertWindow.innerHTML = `
  <div class="alert-inner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p><span class="alert-close">&#10006;</span>
  </div>
`;
const alertClose = document.querySelector(".alert-close");
alertClose.addEventListener("click", e => {
  let x = e.target;
  if (x) {
    alertWindow.style.display = "none";
  } else {
    alertWindow.style.display = "";
  }
});

//traffic widget
const trafficWidget = document.querySelector("#traffic-chart");

const buttonsTrafficUl = document.querySelector(".buttons-traffic-list");

let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31"
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 1100, 1450, 1250, 1000, 1650, 2000, 1700, 2200],
      backgroundColor: ["rgba(114, 121, 192, 0.411)"],
      borderWidth: 2,
      lineTension: 0.1,
      pointRadius: 3,
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderColor: "rgb(115, 119, 191)"
    }
  ]
};

let trafficOptions = {
  responsive: true,
  aspectRatio: 2.5,
  animation: {
    duration: 1200
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  legend: {
    display: false
  }
};

let trafficChart = new Chart(trafficWidget, {
  type: "line",
  data: trafficData,
  options: trafficOptions
});

buttonsTrafficUl.addEventListener("click", function (e) {
  const letter = document.querySelectorAll(".buttons-traffic-link");
  for (let i = 0; i < letter.length; i++) {
    letter[i].classList.remove("active");
  }
  if (event.target.tagName === "LI") {
    let button = event.target;
    button.className += " active";
    const letterFound = button.classList;
    for (let i = 0; i < letterFound.length; i++) {
      if (letterFound[i] === "hourly") {
        trafficChart.data.labels = [
          "7am",
          "8am",
          "9am",
          "10am",
          "11am",
          "12pm",
          "1pm",
          "2pm",
          "3pm",
          "4pm",
          "5pm"
        ];
        trafficChart.data.datasets[0].data = [
          20,
          37,
          45,
          42,
          30,
          34,
          46,
          49,
          35,
          39,
          29
        ];
        trafficChart.update();
      } else if (letterFound[i] === "daily") {
        trafficChart.data.labels = [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ];
        trafficChart.data.datasets[0].data = [
          380,
          340,
          320,
          370,
          340,
          330,
          300
        ];
        trafficChart.update();
      } else if (letterFound[i] === "weekly") {
        trafficChart.data.labels = [
          "16-22",
          "23-29",
          "30-5",
          "6-12",
          "13-19",
          "20-26",
          "27-3",
          "4-10",
          "11-17",
          "18-24",
          "25-31"
        ];
        trafficChart.data.datasets[0].data = [
          750,
          1250,
          1000,
          1100,
          1450,
          1250,
          1000,
          1650,
          2000,
          1700,
          2200
        ];
        trafficChart.update();
      } else if (letterFound[i] === "monthly") {
        trafficChart.data.labels = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        trafficChart.data.datasets[0].data = [
          21750,
          23250,
          22000,
          24800,
          19450,
          22250,
          21000,
          23000,
          28000,
          22700,
          25200,
          23000
        ];
        trafficChart.update();
      }
    }
  }
});
//End Traffic Widget

//Daily Traffic Widget
const dailyWidget = document.querySelector("#daily-chart");

let dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [100, 50, 200, 120, 170, 70, 245],
      backgroundColor: [
        "#7279C0",
        "#7279C0",
        "#7279C0",
        "#7279C0",
        "#7279C0",
        "#7279C0",
        "#7279C0"
      ],
      borderWidth: 1
    }
  ]
};

let dailyOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  legend: {
    display: false
  }
};

let dailyChart = new Chart(dailyWidget, {
  type: "bar",
  data: dailyData,
  options: dailyOptions
});
//End Daily Traffic Widget

//mobile widget
const mobileWidget = document.querySelector("#mobile-users-chart");

let mobileData = {
  labels: ["Phones", "Tablets", "Desktop"],
  datasets: [
    {
      data: [100, 50, 200],
      backgroundColor: [
        "#7DCD8A",
        "#6AB2B9",
        "#7279C0"
      ],
      borderWidth: 0
    }
  ]
};

let mobileOptions = {
  legend: {
    display: true,
    position: "right",

    labels: {
      boxWidth: 20,
      fontSize: 15,
      precision: 2
    }
  }
};

let mobileChart = new Chart(mobileWidget, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions
});

/*========================================================================================================================================= */

// search for user
const namesList = [
  "Dale Bird",
  "Dan Oliver",
  "Dawn Wood",
  "Victoria Chambers"
];
const inputSearch = document.querySelector("#input-search");
const autocompleteResults = document.querySelector(".autocomplete-results");
const divMatch = document.querySelector(".div-match");
let resultsCursor = -1;
let matches = [];

inputSearch.addEventListener("keydown", e => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

const resetCursor = () => {
  for (let i = 0; i < autocompleteResults.children.length; i++) {
    autocompleteResults.children[i].classList.remove("selected");
  }
};

inputSearch.addEventListener("keyup", e => {
  if (e.key === "ArrowDown") {
    resetCursor();
    if (resultsCursor < autocompleteResults.children.length - 1) {
      resultsCursor++;
    } else {
      autocompleteResults.children.length - 1;
    }
    if (autocompleteResults.children[resultsCursor] != undefined) {
      autocompleteResults.children[resultsCursor].classList.add("selected");
    }
    return;
  }

  if (e.key === "ArrowUp") {
    resetCursor();
    if (resultsCursor > 0) {
      resultsCursor--;
    } else {
      resultsCursor = 0;
    }
    if (autocompleteResults.children[resultsCursor] != undefined) {
      autocompleteResults.children[resultsCursor].classList.add("selected");
    }
    return;
  }

  if (e.key === "Enter") {
    resetCursor();
    if (inputSearch.value != autocompleteResults.children[resultsCursor] && autocompleteResults.children[resultsCursor] != undefined) {
      inputSearch.value = autocompleteResults.children[resultsCursor].innerHTML;
      autocompleteResults.classList.remove("show");
      resultsCursor = -1;

    }
    return;
  }

  //filter search
  autocompleteResults.classList.add("show");
  let input = inputSearch.value;
  autocompleteResults.innerHTML = "";
  matches = namesList.filter(function (names) {
    return names.toLowerCase().indexOf(input.toLowerCase()) > -1;
    //Search for first letter
    //return names.toLowerCase().startsWith(input.toLowerCase());
  });

  matches.forEach(function (matched) {
    let div = document.createElement("div");
    div.innerHTML = matched;
    div.className = "div-match";
    autocompleteResults.appendChild(div);
  });

  if (input === "") {
    autocompleteResults.innerHTML = "";
  }
  if (autocompleteResults.innerHTML === "") {
    autocompleteResults.classList.remove("show");
  }
});

//click search
document.addEventListener("click", e => {
  if (e.target.className === "div-match") {
    inputSearch.value = e.target.innerHTML;
    autocompleteResults.classList.remove("show");
  } else if (e.target === autocompleteResults.children[resultsCursor]) {
    inputSearch.value = autocompleteResults.children[resultsCursor].innerHTML;
    autocompleteResults.classList.remove("show");
  }
});

//check for search user and message fields
const errorInputMessage = document.querySelector(".error-input-message");
const formText = document.querySelector(".form-text");
const sendButton = document.querySelector(".send-button");
const errorFormText = document.querySelector(".error-form-text");
const alertForm = document.querySelector(".alert-form");
const messageUserForm = document.querySelector(".message-user-form");

inputSearch.addEventListener("focusout", function (e) {
  if (inputSearch.value === "") {
    errorInputMessage.innerHTML = "<p>Please fill in the correct username.</p>";
    inputSearch.innerHTML = "";
    inputSearch.style.border = "2px solid #ff0033";
    inputSearch.style.boxShadow = "outset 0 0 20px #ff0033";
  } else {
    errorInputMessage.innerHTML = "";
    inputSearch.innerHTML = "";
    inputSearch.style.border = "2px solid #00ff00";
    inputSearch.style.boxShadow = "outset 0 0 20px #00ff00";
  }
});

formText.addEventListener("focusout", function (e) {
  if (formText.value === "") {
    errorFormText.innerHTML = "<p>Please fill in the message text.</p>";
    formText.innerHTML = "";
    formText.style.border = "2px solid #ff0033";
    formText.style.boxShadow = "outset 0 0 20px #ff0033";
  } else {
    errorFormText.innerHTML = "";
    formText.innerHTML = "";
    formText.style.border = "2px solid #00ff00";
    formText.style.boxShadow = "outset 0 0 20px #00ff00";
  }
});

messageUserForm.addEventListener("submit", function (e) {
  if (namesList.join(", ").toLowerCase().indexOf(inputSearch.value.toLowerCase()) > -1) {
  } else {
    alert("Please fill out the 'Search For User' field.");
    e.preventDefault();
  }

  if (formText.value === "" && inputSearch.value === "") {
    alert("Please fill the 'Search For User' and 'Message' fields.");
    e.preventDefault();
  } else if (formText.value === "") {
    alert("Please fill the 'Message' field.");
    e.preventDefault();
  } else if (inputSearch.value === "") {
    alert("Please fill the 'Search For User' field.");
    e.preventDefault();
  } else if (
    namesList
      .join(", ")
      .toLowerCase()
      .indexOf(inputSearch.value.toLowerCase()) > -1 &&
    formText.value !== "" &&
    inputSearch.value !== ""
  ) {
    alert("Thank you! Your information was submitted!");
  }
});


//settings storageLocal

//timezone
let togBtn = document.querySelector("#tog-btn");
let togBtn2 = document.querySelector("#tog-btn2"); 
const timeZone = document.querySelector("#timezone");
let lastSelected = localStorage.getItem("select");



if (lastSelected) {
  timeZone.value = lastSelected;
}

timeZone.addEventListener("click", (e) => {
  lastSelected = timeZone.options[timeZone.selectedIndex].value;
  localStorage.setItem("select", lastSelected);
});

//Toggle Switch
let data = JSON.parse(localStorage.getItem("togBtn"));
let data1 = JSON.parse(localStorage.getItem("togBtn2"));

if(data) {
  togBtn.checked = true;
}

togBtn.addEventListener("click", (e) => { 
 localStorage.setItem("togBtn", togBtn.checked);
});

if(data1) {
  togBtn2.checked = true;
}

togBtn2.addEventListener("click", (e) => { 

  localStorage.setItem("togBtn2", togBtn2.checked);

});

//Reset Settings
const cancelButton = document.querySelector(".cancel-btn");

cancelButton.addEventListener("click", e => {
  localStorage.removeItem("timezone");
  localStorage.removeItem("email");
  localStorage.removeItem("public");
  document.querySelector("#tog-btn").checked = false;
  document.querySelector("#tog-btn2").checked = false;
  document.querySelector("#timezone").value = timeZone;
})