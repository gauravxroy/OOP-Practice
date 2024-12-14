//login-credentials

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const accountVal = document.querySelector("#account-number").value;
  const passwordField = document.querySelector("#password").value;
  const password = "1234@abc";
  const account = "gaurav12";
  if (accountVal == account && passwordField == password) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("account-section").classList.remove("hidden");
    document.getElementById("transaction-section").classList.remove("hidden");
    document.getElementById("account-number").value = account;
    alert("Logged In");
  } else {
    alert("Invalid Credentials");
  }
});
