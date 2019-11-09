document.write("Hello world");

 function changePara () {
  document.getElementById("jsExample").innerHTML ="This is the replaced text";
}
  var mathY = 3;
  var mathZ;
  var mathx = 200;
  mathz = mathx + mathY;

  document.write(mathz);

  function argExample (x,y) {
  mathz = x + y;
  document.write(mathz);

}
  function styleswap(){
  document.getElementById ("one").style.fontsize= "30px" ;
  document.getElementById ("one").style.color= "blue" ;
  document.getElementById ("two").style.marginleft= "150px" ;
  document.getElementById ("two").style.color= "green" ;
  document.getElementById ("three").style.textTransform= "uppercase" ;
  document.getElementById ("two").style.color= "orange" ;

}

function calcOutputAdd(x,y){
  var result= x+y;
  document.getElementById("output").innerHTML= result;
}

function calcOutputSubtract(x,y){
  var result= x-y;
  document.getElementById("output").innerHTML= result;
}


function calcOutputMultiply(x,y){
  var result= x*y;
  document. getElementById("output").innerHTML = result;
}


function calcOutputDivide(x,y){
  var result= x/y;
  document. getElementById("output").innerHTML= result;
}
