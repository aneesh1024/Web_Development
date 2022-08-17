const signin_btn = document.querySelector(".primary-btn");
function alert_mg() {
  alert("This is just a clone website ");
}
signin_btn.array.forEach((element) =>
  element.addEventListener("click", alert_mg)
);
