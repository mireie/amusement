function heightInIn(number1, number2) {
console.log(number1+" and "+number2)
  return (number1 * 12) + number2;
}



$(document).ready(function() {
  $("form#heightCalc").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#feet").val());
    let number2 = parseInt($("#inches").val());
    if (number1 < 1 || isNaN(number1)) {
      number1 = 0;
    }
    if (number2 < 1 || isNaN(number2)) {
      number2 = 0;
    }
    const height = heightInIn(number1, number2);
    $("#userFeet").text(number1);
    $("#userInches").text(number2);

    $("#ride1, #ride2, #ride3, #ride4, #ride5, #ride6").removeClass();
    
    if (height > 36) {
      $("#ride1").addClass("can-ride");
    } else {
      $("#ride1").addClass("cant-ride");
      }
    if (height < 48) {
      $("#ride2").addClass("can-ride");
    } else {
      $("#ride2").addClass("cant-ride");
      }
    if (height >= 48 && height <= 60) {
      $("#ride3").addClass("can-ride");
    } else {
      $("#ride3").addClass("cant-ride");
      }
    if (height > 60) {
      $("#ride4").addClass("can-ride");
    } else {
      $("#ride4").addClass("cant-ride");
      }
    if (height >= 48 && height <= 72) {
      $("#ride5").addClass("can-ride");
    } else {
      $("#ride5").addClass("cant-ride");
      }
    if (height < 66) {
      $("#ride6").addClass("can-ride");
    } else {
      $("#ride6").addClass("cant-ride");
      }
    $("#output").show();
  
    //Insult text
    if (height < 48) {
      $("#rudeHeight").text("shorty");
    } else if (height >= 48 && height <= 72) {
      $("#rudeHeight").text("you completely average person");
    } else {
      $("#rudeHeight").text("skyscraper");
    }


  });
  $("button#reset").click(function() {
    $("#ride1, #ride2, #ride3, #ride4, #ride5, #ride6").removeClass();
    $("#output").hide();
  });
  


});