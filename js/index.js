let ubahNavUser = document.querySelector("#ubahDomUser")
let ubahDomLogout = document.querySelector("#ubahDomLogout")

let user = JSON.parse(localStorage.getItem("user"))
let isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"))
if(user) {
  ubahNavUser.innerHTML = user.name
  let kehalCart = document.querySelector("#ubahDomUser")
  kehalCart.href = "cart.html"
} else {
  ubahNavUser.innerHTML = "Register"
  // window.location.href = "../index.html";
}

if(isLoggedin) {
  ubahDomLogout.innerHTML = isLoggedin
  let kehalHome = document.querySelector("#ubahDomLogout")
  kehalHome.href = "index.html"

} else {
  ubahDomLogout.innerHTML = "login"
  // window.location.href = "../index.html";
}

