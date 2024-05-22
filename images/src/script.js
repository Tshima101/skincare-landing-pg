function subscribeNow() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let language = prompt("What language do you prefer to engage us with?");
  language = language.toLowerCase();
  language = language.trim();

  if (language === "english") {
    alert(
      "Thank you " +
        name +
        " for subscribing with us, Enjoy our premium skincare content 🙂"
    );
  } else {
    alert("Oops! you can't subscribe 🙁");
  }
}
let subscribeButton = document.querySelector("button");
subscribeButton.addEventListener("click", subscribeNow);
