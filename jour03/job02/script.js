let table = ["#img1", "#img2", "#img3", "#img4", "#img5", "#img6"];
let tableau = [];

function rdm(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
table.forEach((img) => {
  $(img).on("dragstart", (e) => {
    e.originalEvent.dataTransfer.setData("img", e.currentTarget.id);
  });
  $("#salut").on("dragover", (e) => {
    e.preventDefault();
  });
});

$("#salut").on("drop", (e) => {
  $("#" + e.originalEvent.dataTransfer.getData("img")).appendTo($("#salut"));

  tableau.push("#" + e.originalEvent.dataTransfer.getData("img"));
  console.log(tableau);
  if (JSON.stringify(table) == JSON.stringify(tableau)) {
    console.log("bien joué");
  } else {
    console.log("essaye encore");
  }
});

let lose = true;
let countTry = 0;

$("#random").on("click", () => {
  for (let i = 0; i <= 200; i++) {
    // #img3
    $("body").append($(table[rdm(0, 5)]));
  }

  while (gambling()) {}
});

function gambling() {
  let count = 0;
  for (let i = 0; i <= 200; i++) {
    // #img3
    $("body").append($(table[rdm(0, 5)]));
  }

  // for (let i = 0; i < table.length; i++) {
  //   console.log($(".gamb")[i].attributes[0].value);
  //   if ("#" + $(".gamb")[i].attributes[0].value == table[i]) {
  //     count++;
  //   }
  // }

  // countTry++;

  // if (count == 6) {
  //   console.log("jackpot ! on a essayé : " + countTry);
  //   countTry = 0;
  //   return false;
  // } else {
  //   return true;
  // }

  // console.log($(".gamb"));
}
