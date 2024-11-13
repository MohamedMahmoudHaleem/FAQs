"use strict";

const faqGroups = document.querySelectorAll(".q-group");

faqGroups.forEach((group) => {
  const button = group.querySelector(".collapse");
  const icon = button.querySelector("img");
  const text = group.querySelector(".text");
  text.style.display = "none";


  button.addEventListener("click", () => {
    if (text.style.display === "none") {
      text.style.display = "block";   
      icon.src = "./assets/images/icon-minus.svg";  
    } else {
      text.style.display = "none";   
      icon.src = "./assets/images/icon-plus.svg"; 
    }
  });
});