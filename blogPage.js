
function checkRegistration(){
    var form_valid = (document.querySelector('.input1').value == 'a@gmail.com' && document.querySelector(".input2").value=="a");
//     if(!form_valid){
//         alert('Given data is incorrect');
//         return false;
//     }
//     return true;
// }

var form_valid_user= (document.querySelector('.input1').value == 'b@gmail.com' && document.querySelector(".input2").value=="b");
if(form_valid){
  window.open('file:///Users/Sindhu/Documents/UI_Lab/homePage.html');
}
else if(form_valid_user){
  window.open('file:///Users/Sindhu/Documents/UI_Lab/searchPage.html');
}
else{
  alert('Given data is incorrect');
}
