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
      $("#ride1img").attr("src","../images/can-ride.png");
    } else {
      $("#ride1").addClass("cant-ride");
      $("#ride1img").attr("src","../images/cant-ride.png");
      }
    if (height < 48) {
      $("#ride2").addClass("can-ride");
      $("#ride2img").attr("src","../images/can-ride.png");
    } else {
      $("#ride2").addClass("cant-ride");
      $("#ride2img").attr("src","../images/cant-ride.png");
      }
    if (height >= 48 && height <= 60) {
      $("#ride3").addClass("can-ride");
      $("#ride3img").attr("src","../images/can-ride.png");
    } else {
      $("#ride3").addClass("cant-ride");
      $("#ride3img").attr("src","../images/cant-ride.png");
      }
    if (height > 60) {
      $("#ride4").addClass("can-ride");
      $("#ride4img").attr("src","../images/can-ride.png");
    } else {
      $("#ride4").addClass("cant-ride");
      $("#ride4img").attr("src","../images/cant-ride.png");
      }
    if (height >= 48 && height <= 72) {
      $("#ride5").addClass("can-ride");
      $("#ride5img").attr("src","../images/can-ride.png");
    } else {
      $("#ride5").addClass("cant-ride");
      $("#ride5img").attr("src","../images/cant-ride.png");
      }
    if (height < 66) {
      $("#ride6").addClass("can-ride");
      $("#ride6img").attr("src","../images/can-ride.png");
    } else {
      $("#ride6").addClass("cant-ride");
      $("#ride6img").attr("src","../images/cant-ride.png");
      }
    $("#output").show();
  
    //Insult text
    if (height < 48) {
      $("#rudeHeight").text("shorty");
    } else if (height >= 48 && height <= 72) {
      $("#rudeHeight").text("you completely average person. You're not special");
    } else {
      $("#rudeHeight").text("skyscraper");
    }


  });
  $("button#reset").click(function() {
    $("#ride1, #ride2, #ride3, #ride4, #ride5, #ride6").removeClass();
    $("#output").hide();
    ("#ride1img, #ride2img, #ride3img, #ride4img, #ride5img, ").attr("src","../images/can-ride.png")
  });
  


});