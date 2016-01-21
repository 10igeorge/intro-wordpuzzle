var isString = function(phrase) {
  if (typeof(phrase) !== "string" ){
    return false;
  } else {
    return true;
  }
}

var isVowel = function(phrase) {
  var phrase = phrase.replace(/[aeiou]/g,'-');
  return phrase;
}

$(document).ready(function(){
  $("form#vowels").submit(function(event){
    var userSentence = $("#sentence").val();
    var translated = isVowel(userSentence);
    var notString = isString(userSentence);
    $("#result").text(translated);
    event.preventDefault();
  });

});
