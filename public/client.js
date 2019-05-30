var pWin1, pWin2, pWin3, pWinF, pLose1, pLose2, pLose3, intBank, mOdds, aOdds, pBank, prob, eprob1, eprob2, actual, field;

$('#Results').hide();
$('#exResults').hide();
//form submit rules and STOP THE SCREEN FROM REFRESHING!!
$('#mainform').submit(function () {
 loopFunction();
 exactaFunction(); 
 return false;
});

$('#probTable').change(function(){
  $('#winResults td').remove();
  $('#Results').slideUp();
  $('#exResults').slideUp();
  var first = $("#1win").val();
    var second = $("#2win").val();
    var third = $("#3win").val();
  field = bigRig(first, second, third).toFixed(2);
  if(field <0){
    alert("You predicted over 100% for the win. Please adjust your predicted probabilites");
  } else {
  $("#Fwin").html(field);
  }});

function bigRig(first, second, third){
    return 1 - first - second - third;
  };


function loopFunction(){
 var i; 
 for (i = 1; i <= 3; i++){
 var horseNum = "#" + i + "win";
 var horseNum2 = "#" + i + "place";
 var horseNum3 = "#" + i + "actual"; 
 prob = $(horseNum).val();
 actual = $(horseNum3).val();
   
 wOddsFunction(prob,actual);  
   
 function wOddsFunction(prob,actual){
  intBank = $("#bankRoll").val();
  pLose1 = 1 - prob;
  mOdds = pLose1/prob;
  pBank = (((actual-1) * prob) - pLose1)/(actual-1);
  $("#winResults").append("<tr><td>" + i + "</td><td>" + mOdds.toFixed(1) + "</td><td>&#036;" + (pBank * intBank).toFixed(2) + "</td></tr>");
  $('#Results').slideDown(800);
};

 }
};


function exactaFunction(){
  //get percentages of probabilites from above entries
  var xAB = $("#1win").val() * $("#2place").val();
  var oddsAB = (1 - xAB)/xAB;
  $("#exAB").html(oddsAB.toFixed(1));
  var xAC = $("#1win").val() * $("#3place").val();
  var oddsAC = (1 - xAC)/xAC;
  $("#exAC").html(oddsAC.toFixed(1));
  var xBA = $("#2win").val() * $("#1place").val();
  var oddsBA = (1 - xBA)/xBA;
  $("#exBA").html(oddsBA.toFixed(1));
  var xBC = $("#2win").val() * $("#3place").val();
  var oddsBC = (1 - xBC)/xBC;
  $("#exBC").html(oddsBC.toFixed(1));
  var xCA = $("#3win").val() * $("#1place").val();
  var oddsCA = (1 - xCA)/xCA;
  $("#exCA").html(oddsCA.toFixed(1));
  var xCB = $("#3win").val() * $("#2place").val();
  var oddsCB = (1 - xCB)/xCB;
  $("#exCB").html(oddsCB.toFixed(1));
  var xAF = $("#1win").val() * (2 - $("#1place").val());
  var oddsAF = (1 - xAF)/xAF;
  $("#exAF").html(oddsAF.toFixed(1));
  
  
  //remove bad investments (percentages below a certain floor) from table td's
  
  
  
  $('#exResults').delay(850).slideDown(800);
};