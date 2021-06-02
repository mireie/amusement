function height(number1, number2) {
  return (number1 * 12) + number2;
}



$(document).ready(function(){
  $().submit(function(event) {
    const number1 = parseInt(input("#feet"));
    const number2 = parseInt(input("#inches"));
    const height = height(number1, number2);
    $(".entered-height").slideToggle();








  }
}