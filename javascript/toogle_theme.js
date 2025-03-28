document.addEventListener("DOMContentLoaded", () => {

  const light_btn = document.getElementById("light_btn")
  const dark_btn = document.getElementById("dark_btn")
  
  light_btn.addEventListener("click", () => {
    console.log("testclick")
    
    let mode = document.querySelector("html")
    mode.classList.toggle("dark");
  })
})