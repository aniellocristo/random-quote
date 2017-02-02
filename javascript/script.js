$(document).ready(function(){

  //API Call
  $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        $("#quote").html('"'+data.quote+'"');
        $("#author").html("- " + data.author);
       },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "XVLNx13mYwmshUBE4QXhGuGn6Y9Cp1zhWPPjsnImQiN5KDyAR3");
      }
  });

  // Button Hover Effect
  $(".button1").mouseover(function(){
    $(".hover1").show();
  });

  $(".button1").mouseleave(function(){
    $(".hover1").hide();
  });

  $(".button2").mouseover(function(){
    $(".hover2").show();
  });

  $(".button2").mouseleave(function(){
    $(".hover2").hide();
  });

  //RefreshQuote Function
  $("#refresh").click (function(){
    location.reload();
  });

  //Twitter Function
  var quote;

  setTimeout(function(){
    quote = document.querySelector('#quote').innerHTML
  }, 1000);

  $("#tweet").on("click", function(){
    var tweet = "https://twitter.com/intent/tweet?text="+quote;
    window.open(tweet);
  });

});
