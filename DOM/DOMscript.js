document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Click Here");
  button.appendChild(buttonText);
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    alert("DOM is way better than jQuery!");
  });

  let nextButton = document.getElementById("alertButton");
  nextButton.addEventListener("click", function () {
    let getInput = document.getElementById("input-text");
    alert(getInput.value);
  });

  let getDiv = document.getElementById("div");
  getDiv.addEventListener("mouseover", function () {
    getDiv.style.backgroundColor = "lime";
  });

  getDiv.addEventListener("mouseout", function () {
    getDiv.style.backgroundColor = "white";
  });

  function randomColors() {
    let paragraphColors = [
      "yellow",
      "blueviolet",
      "dimgray",
      "burlywood",
      "darkmagenta",
    ];
    let randomColors = Math.floor(Math.random() * paragraphColors.length);
    return paragraphColors[randomColors];
  }

  let getParagraph = document.getElementById("rainbowParagraph");
  getParagraph.addEventListener("click", function () {
    getParagraph.style.color = randomColors();
  });

  let getnameButton = document.getElementById("nameButton");
  getnameButton.addEventListener("click", function () {
    let span = document.createElement("span");
    let spanText = document.createTextNode("Kurt Butler");
    span.appendChild(spanText);

    let getDiv2 = document.getElementById("Div2");
    getDiv2.appendChild(span);
  });
  let friendsCounter = 0;
  let friends = [
    "My Cat",
    "John Wick",
    "Kratos",
    "That guy from Breaking Bad",
    "The Hawaiin Punch Logo Kid",
    "James",
    "Danny Devito",
    "Susuke Uchiha",
    "Frodo Baggins",
    "Dolly Parton",
  ];
  let getFriendButton = document.getElementById("friendsButton");
  getFriendButton.addEventListener("click", function () {
    let getUlist = document.getElementById("friendsList");
    let list = document.createElement("li");
    getUlist.appendChild(list);
    let listText = document.createTextNode(friends[friendsCounter]);
    list.appendChild(listText);
    friendsCounter++;
  });
});
