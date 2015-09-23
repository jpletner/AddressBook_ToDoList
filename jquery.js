$(document).ready(function() {

$("form#new-contact").submit(function(event) {
  event.preventDefault();

  var inputtedFirstName = $("input#new-first-name").val();
  var inputtedLastName = $("input#new-last-name").val();
  var inputtedAddress = $("input#new-address").val();
  var newContact ={
    firstName: inputtedFirstName,
    lastName: inputtedLastName,
    address: inputtedAddress
  };

  $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");


  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".address").text(newContact.address);
  });


});

$("form#newActivity").submit(function(event) {
  event.preventDefault();


  var inputtedTitle = $("input#title").val();
  var inputtedActivity = $("input#activity").val();
  var newToDo ={title: inputtedTitle, list: inputtedActivity};

  $("ul#activityList").append("<li><input type='checkbox' name='checkbox'></input><span class='activity'>" + newToDo.title + ": " + newToDo.list + "</span></li>");

  $("input#activity").val("");
  $("input#title").val("");

  $("input[name='checkbox']").click(function() {
    $(this).parent().children('.activity').addClass('strike');
  });


});

});
