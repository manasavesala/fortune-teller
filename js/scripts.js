$(document).ready(function(){
  $("form#fortune_survey").submit(function(event){
    event.preventDefault();

    var unluckyArray = [];
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unluckyArray.push($(this).val());
    });

    var luckyArray = [];
    $("input:checkbox[name=lucky]:checked").each(function(){
      luckyArray.push($(this).val());
    });

    if (unluckyArray.length > 1) {
      $("#output").text("You are cursed!");
    }
    else if (luckyArray.length > 2) {
      $("#output").text("Your fortunes are clouded...")
    }
    else {
      $("#output").text("Your luck is infinite!")
    }
  });
});
