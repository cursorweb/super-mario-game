$('.mario').click(function(){
  $('.luigi,.mario').removeClass("checked");
  $('.mario').addClass("checked");
  localStorage.setItem("char", "mario");
});
$('.luigi').click(function(){
  $('.luigi,.mario').removeClass("checked");
  $('.luigi').addClass("checked");
  localStorage.setItem("char", "luigi");
});
if(localStorage.getItem("char")){
  $('.luigi,.mario').removeClass("checked");
  $('.'+localStorage.getItem("char")).addClass("checked");
}
if(localStorage.getItem("level") && localStorage.getItem("score")){
  $('.d1').click(function(){
    if(confirm("Are you sure?")){
      localStorage.setItem("score",0)
      alert("Carefully reset score.");
    }
  });
  $('.d2').click(function(){
    if(confirm("Are you sure?")){
      localStorage.setItem("level",0)
      alert("Carefully reset level.");
    }
  });
  $('.d3').click(function(){
    if(confirm("Are you sure?")){
      localStorage.setItem("level",0)
      localStorage.setItem("score",0)
      alert("Carefully reset all.");
    }
  });
}else{
  $('.d1,.d2,.d3').click(function(){
    window.location = "game.html";
  });
}