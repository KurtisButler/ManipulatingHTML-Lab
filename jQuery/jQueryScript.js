$(document).ready(function () {
  $("body").append('<button id = "myButton">Click Me</button');
  $("#myButton").click(function () {
    alert("I dont COMPLETELY hate jQuery.");
  });
  $("#btnSubmit").click(function (event) {
    event.preventDefault();

    alert($("#inputText").val());
  });

  $("#Div1").mouseover(function () {
    $("#Div1").css("backgroundColor", "purple");
  });

  $("#Div1").mouseout(function () {
    $("#Div1").css("backgroundColor", "white");
  });

  $("body").append(
    "<p> Random letters are random, they have no meaning. Dont look into it. </p>"
  );

  $("p").click(function () {
    let $colorsArray = ["red", "blue", "purple", "green", "yellow"];
    let $randomColors = Math.floor(Math.random() * $colorsArray.length);
    $("p").css("color", $colorsArray[$randomColors]);
  });

  $("#nameButton").click(function () {
    $("#nameDiv").append("<span> Kurt Butler </span>");
  });

  $("#friendsButton").click(function () {
    let $friendsArray = [
      "Joseph",
      "Catie",
      "Emma",
      "Natalie",
      "Jesse",
      "Connor",
      "Carson",
      "Kellen",
      "Danny Devito",
      "Charlie",
    ];

    let $friendsmsg = $friendsArray[$friendsCounter];
    $("#friendsList").append(`<li> + ${$friendsmsg} + </li>`);
    $friendsCounter++;
  });
  let $friendsCounter = 0;
});
