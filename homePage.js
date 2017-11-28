var arr1=[];
var arr2=[];
var arr3=[];
var arr4=[];
var arr5=[];
var arr6=[];
var arr7=[];
var arr8=[];
var arr9=[];
var arr10=[];
var classname = document.getElementsByClassName("doc");
console.log(classname);



var myFunction = function() {
  event.preventDefault();

  var tt=event.target.id;
console.log(event.target.id+"%%%%%%");
console.log(event.target.innerHTML+"^^^^^");
var copy1=event.target.id;
var copy2="c1";

 document.getElementById(copy1).style.fontWeight="bold";
document.querySelector(".num").style.display="block";
document.querySelector(".submit1").style.display="block";
console.log(document.getElementById(copy1).getElementsByClassName(copy2)[0].id);
  // document.querySelector(".num").style.backgroundColor="gray";
  document.querySelector(".num").style.fontSize="20px";
var f=document.querySelector('.num').value;
if(event.target.id=="no1"){
  arr1.push(f);
  var b=arr1.join(" ");


}
else if(event.target.id=="no2"){
  arr2.push(f);
  var b=arr2.join(" ");

}
else if(event.target.id=="no3"){
  arr3.push(f);
  var b=arr3.join(" ");

}
else if(event.target.id=="no4"){
  arr4.push(f);
  var b=arr4.join(" ");
}
else if(event.target.id=="no5"){
  arr5.push(f);
  var b=arr5.join(" ");
}
else if(event.target.id=="no6"){
  arr6.push(f);
  var b=arr6.join(" ");
}
else if(event.target.id=="no7"){
  arr7.push(f);
  var b=arr7.join(" ");
}
else if(event.target.id=="no8"){
  arr8.push(f);
  var b=arr8.join(" ");
}
else if(event.target.id=="no9"){
  arr9.push(f);
  var b=arr9.join(" ");
}
else if(event.target.id=="no10"){
  arr10.push(f);
  var b=arr10.join(" ");

}




var x=document.getElementById(copy1).getElementsByClassName(copy2)[0];

       x.innerHTML=b;

  document.querySelector('.num').value="";
  document.querySelector('.num').style.backgroundColor="white";

  document.getElementById(copy1).getElementsByClassName(copy2)[0].style.fontWeight="normal";


};

for (var i = 0; i < classname.length; i++) {


    classname[i].addEventListener('click', myFunction,false);

classname[i].style.display="normal";

}
