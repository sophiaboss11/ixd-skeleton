$(document).ready(function() {
    initializePage();
});

// function initializePage() {
//    $('#testjs').click(function(e) {
//            $('.jumbotron h1').text("Javascript is connected");
//            });

//    $("a.thumbnail").click(projectClick);

// }
// function projectClick(e) {
//    // prevent the page from reloading     
//    e.preventDefault();
//    // In an event handler, $(this) refers to     
//    // the object that triggered the event     
//    $(this).css("background-color", "#7fff00");
// }

function addNotes(){
    //var test = "stickynote";
    var running = $("<p></p>").text("StickyNote"); 

    $("button").after(running);
    console.log("add notes called");
}



