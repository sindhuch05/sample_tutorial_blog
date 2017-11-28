let main_header_scroll=document.querySelector("body");
let topic1_click=document.querySelector(".topic1");
let topic2_click=document.querySelector(".topic2");

// console.log("sss");
main_header_scroll.addEventListener('wheel',(event)=>{
  console.log("scrooll");
  // event.preventDefault();
  // document.querySelector(".main-head-wrapper").style.position="fixed";
  document.querySelector(".main-head-wrapper").style.backgroundColor="gray";
  document.querySelector(".main-head-wrapper").style.color="white";
});
//
// topic1_click.addEventListener("focus",(event)=>{
//   event.preventDefault();
//   topic1_click.innerHTML=`<ul>
//   <li>SubTopic1</li>
//   <li>SubTopic1</li>
//   <li>SubTopic1</li>
//   <li>SubTopic1</li>
//   <li>SubTopic1</li>
//   </ul>`
//
// })
