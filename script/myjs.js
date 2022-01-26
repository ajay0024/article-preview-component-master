// window.onload = function() {
//   yourFunction(param1, param2);
// };
function toggleShareFooter(id){
  console.log("hiding");
  shareFooter=document.getElementById("footer2");
  btn=document.getElementById("button");
  if(shareFooter.classList.contains("hidden")){
    btn.src="images/icon-share-white.svg";
    btn.classList.add("dark-background");
    shareFooter.classList.remove("hidden");
  }
  else{
    btn.src="images/icon-share.svg";
    btn.classList.remove("dark-background");
    shareFooter.classList.add("hidden");
  }

}
