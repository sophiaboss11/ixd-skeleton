$(document).ready(function() {
    initializePage();
});

var x;
var y; 
var countNote;

// function addNotes(){
//    //activate function. while active, if recieve tap, get location of tap and add note to that area.
//    var isActive = false;
//    var txt1 = "<p>add a note</p>";
//     countNote ++;

//     if(isActive = false){
//         tapLocation();
//         isActive = true;
//     }

//     if(isActive= true){
//         //activate tap location
//         //tapLocation();
//         x = 100;
//         y = 100;
        
//         //change note location
//         //document.getElementById('tId').style.width = "30%";
//         document.getElementById("note1").style.left = x;
//         document.getElementById("note1").style.top = y;
//         //create element to append to??
//        $("body").append(note1); 
//     //    var word = "word";
//     //    $("button").after(word); 
    
//     }
    
//     console.log("add notes called");
// }

function addNotes(){
   //activate function. while active, if recieve tap, get location of tap and add note to that area.
   var isActive = false;
   var txt1 = "<p>add a note</p>";
    countNote ++;

    if(isActive = false){
        tapLocation();
        isActive = true;
    }

    if(isActive= true){
        //activate tap location
        //tapLocation();
        x = 100;
        y = 100;
        
        //change note location
        //document.getElementById('tId').style.width = "30%";
        document.getElementById("#note1").style.left = x;
        document.getElementById("#note1").style.top = y;
        //create element to append to??
       $("body").append(note1); 
    //    var word = "word";
    //    $("button").after(word); 
    
    }
    
    console.log("add notes called");
}

function addNotes2(){
    var n = document.createElement('div');
    n.className = 'sticky-note';

    console.log("add notes called");
}

function tapLocation(){
    //return tap location
    x = MouseEvent.clientX;
    y = MouseEvent.clientY;
    //return x;
    console.log("tapLocation() called");
}

function removeNotes(){
    //$("button").click(function(){
    $(this).hide();
    //});
    console.log("removeNotes() called");
}

$( function() {
    $( "#draggable").draggable({
        cursor: "grabbing",
        opacity: 0.5,
        //grid:[300,300],
        snap: true,
        snapTolerance: 30
    });
  } );



