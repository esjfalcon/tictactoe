var turn = 1;
var a= $(".cell")








function colorful(b1,b2,b3){
  b1.style.background="cyan";
  b2.style.background="cyan";
  b3.style.background="cyan";
}




function winner(){
  var box1 = document.getElementById("cell1"),
  box2 = document.getElementById("cell2"),
  box3 = document.getElementById("cell3"),
  box4 = document.getElementById("cell4"),
  box5 = document.getElementById("cell5"),
  box6 = document.getElementById("cell6"),
  box7 = document.getElementById("cell7"),
  box8 = document.getElementById("cell8"),
  box9 = document.getElementById("cell9");
  
  if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
      $("#winner").css("display", "block")
      //$('.cell').hide();
      colorful(box1,box2,box3);
    }
  else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
      $("#winner").css("display", "block");
      //$('.cell').hide();
      colorful(box4,box5,box6);
    }
  else if (box7.innerHTML !=="" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
      $("#winner").css("display", "block");
      //$('.cell').hide();
      colorful(box7,box8,box9);
    }
  else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
      $("#winner").css("display", "block");
     // $('.cell').hide();
      colorful(box1,box5,box9);
    }
  else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
      $("#winner").css("display", "block");
      //$('.cell').hide();
      colorful(box3,box5,box7);
    }
  else if (box1.innerHTML !=="" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
      $("#winner").css("display", "block");
     // $('.cell').hide();
      colorful(box1,box4,box7);
    }
  else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
      $("#winner").css("display", "block");
     // $('.cell').hide();
      colorful(box2,box5,box8);
    }
  else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
      $("#winner").css("display", "block");
      //$('.cell').hide();
      colorful(box3,box6,box9);
    }
  else if(box1.innerHTML !== "" && box2.innerHTML !== "" && box3.innerHTML !== "" && box4.innerHTML !== "" && box5.innerHTML !== "" && box6.innerHTML !== "" && box7.innerHTML !== "" && box8.innerHTML !== "" && box9.innerHTML !== ""){
      $("#draw").css("display", "block");
      //$('.cell').hide();
  }
  
}









$(".cell").click(function(){
  if($(this).text() ===""){
    if(turn===1){
      $(this).text("x")
      $(this).css("background-color","grey")
      winner()
      turn = 0
      $("#player").text("player 2")
      
    }
    else{
      $(this).text("o")
      $(this).css("background-color","rgba(191, 191, 191, 1)")
      winner()
      turn = 1
      $("#player").text("player 1")
      
  }
  
  }
  })


$(document).ready(function(){
  $("#btn").click(function(){
     $(".cell").css("display", "block");
     $(".cell").text("")
     $(".cell").css("background-color","white")
     $("#btn").hide();
     
  });
   $("#bttn").click(function(){
     $(".cell").fadeOut(500)
     $(".cell").text("")
     $(".cell").fadeIn(1000)
     $(".cell").css("background-color","white");
     $("#winner").hide();
     
    });
});



function draw(){
  if(a ==="" && winner()){
    console.log("draw")
  }
}





