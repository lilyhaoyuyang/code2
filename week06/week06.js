var madlibs;

function preload() {
  madlibs = loadJSON('madlibs.json');
}

function setup() {
  createCanvas(800, 530);
}

function draw() {
  background(121, 175, 245);
  fill(255);
  text("Most doctors agree that bicycle " + madlibs["first_verbing"] +
   " is a " + madlibs["second_adjective"] + " form of exercise.", 50, 50);
   text(madlibs["third_verbing"] + " a bicycle enables you to develop " +
        "your " + madlibs["fourth_bodypart"] + " muscles as well as " +
        madlibs["fifth_adverb"] + " increase the rate of your " +
        madlibs["sixth_bodypart"] + " beat", 50, 100);
        //for(var i = 0; i <6;i++){
          fill(243, 244, 161);
          rect(50,120,540,380);
          fill(248, 158, 203);
          rect(30+30,500-madlibs["first_verbing"],10,madlibs["first_verbing"]);
          rect(60+30,500-madlibs["second_adjective"],10,madlibs["second_adjective"]);
          rect(90+30,500-madlibs["third_verbing"],10,madlibs["third_verbing"]);
          rect(120+30,500-madlibs["fourth_bodypart"],10,madlibs["fourth_bodypart"]);
          rect(150+30,500-madlibs["fifth_adverb"],10,madlibs["fifth_adverb"]);
          rect(180+30,500-madlibs["sixth_bodypart"],10,madlibs["sixth_bodypart"]);
        //}
}

// function loadJSON(file) {
//   console.log("loading json");
//   if (file.subtype === 'json') {
//     parseJSON(file.data, parseJSON, errorLoadJSON);
//   }
// }

// function parseJSON(data) {
//   madlibs = data;
//   console.log(madlibs);
// }
//
// function errorLoadJSON(error) {
//   console.log(error);
// }