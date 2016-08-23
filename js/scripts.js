

function Ticket(movieInfo, showTime, age){
  this.movieInfo = movieInfo;
  this.showTime = showTime;
  this.userAge = age;
}

Ticket.prototype.discount = function(){
  var moviePrice = 8;

  if (this.userAge >= 65) {
    discountedPrice = moviePrice * .8;
  }

  alert(discountedPrice);
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedMovieInfo =
    $("#movie-select").val();
    var inputtedTime = $("#time-select").val();
    var inputtedAge = parseInt($("input#age-select").val());

    var newTicket = new Ticket(inputtedMovieInfo, inputtedTime, inputtedAge)
  });
});
