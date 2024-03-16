//write a function
var startMyDay = function () {
    return (`Time for fresh ground coffee and get Phil'd in!`);
};
startMyDay();

//write a function with 1 parameter
var favoriteCookie = function (cookie) {
    console.log(`My favorite cookie is ${cookie}`);
}
favoriteCookie("Oatmeal Raisin");

//write a function with 2 parameter
var introduce = function (name, occupation) {
    console.log(`My name is ${name} and by May 2024 I will be a ${occupation}!`);
};

introduce("Anjie", "front-end developer");
introduce("Raymond", "a simple businessman");

//create a function to capture input
//var hydrationFeedback = function () {
    //var numGlasses = Number(prompt(`How many glasses of water did you have today?`));
    //return numGlasses;
//};
//var glasses = hydrationFeedback();
//console.log(glasses);

//function with prompt & conditional
var hydrationFeedback = function () {
    var numGlasses = Number(
      prompt(`How many glasses of water did you have today?`)
    );
    if (numGlasses >= 8) {
      console.log("Good on you mate. You are well hydrated!!");
    } else if (numGlasses < 8) {
      console.log("DRINK A LARGE BOTTLE OF WATER IMMEDIATELY!!");
    }
    return numGlasses;
  };
  hydrationFeedback();
  